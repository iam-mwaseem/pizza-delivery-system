import { promisify } from 'util';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import sendEmail from '../utils/emails.js';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    path: '/',
    // domain: 'localhost',

    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  // req.session.jwt = token;
  res.cookie('jwt', token, cookieOptions);

  res.status(statusCode).json({
    status: 'success',
    // token,

    token,
    data: {
      user,
    },
  });
};
export const signup = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
  //   expiresIn: process.env.JWT_EXPIRES_IN,
  // });
  createSendToken(newUser, 201, res);

  next();
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  //Check if email and password are provided
  if (!email || !password) {
    throw new Error('Please provide an email and password');
  }

  //Check if user exists and password is correct
  const user = await User.findOne({ email }).select('+password');
  // const correct = await user.isCorrectPassword(password, user.password);
  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    throw new Error('Incorrect email or password');
  }

  //if everything is ok, send back the token
  createSendToken(user, 200, res);

  next();
};

export const protect = async (req, res, next) => {
  // console.log(req.session.jwt);
  // console.log(req.headers);
  //1.Getting token and check of it's there

  // console.log(req.headers.cookie);

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  /*
  if (req.headers.cookie && req.headers.cookie.startsWith('jwt')) {
    token = req.headers.cookie.split('=')[1];
  }
  */

  if (!token) {
    throw new Error('You are not logged in! Please log in to get access.');
  } else {
    console.log("You're logged in!");
  }

  //2. Verification
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);

  //3. Check if user still exists
  const cuurentUser = await User.findById(decoded.id);
  if (!cuurentUser) {
    throw new Error('The user belonging to this token does no longer exist.');
  }

  //4. Check if user changed password after the token was issued
  if (cuurentUser.changedPasswordAfter(decoded.iat)) {
    throw new Error(
      'Your password has changed since you last logged in. Please log in again.',
    );
  }
  req.user = cuurentUser;
  next();
};

export const forgotPassword = async (req, res, next) => {
  //1.Get user based on posted email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    throw new Error('No user found with this email address');
  }

  //2. Generate the random reset token
  const resetToken = user.createPasswordResetToken();

  //we were just modifying the data in createPasswordResetToken , that's why we need to save it to the database
  await user.save({ validateBeforeSave: false });
  //3.send it to user email
  const resetURL = `${req.protocol}://${req.get('host')}/resetpassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Password reset email sent',
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    console.log(error);
    return next();
  }
};

export const resetPassword = async (req, res, next) => {
  //1. Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  console.log(hashedToken);
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  console.log(user);
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Password reset token is invalid or has expired',
    });
  }
  //2. if password is'nt expired , and there is user , update password
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  // Log the user in , send JWT

  createSendToken(user, 200, res);

  next();
};

export const updatePassword = async (req, res, next) => {
  //1.Get user from collection
  const user = await User.findById(req.user._id).select('+password');

  //2. Check if posted current password is correct
  if (
    !(await user.isCorrectPassword(req.body.currentPassword, user.password))
  ) {
    return res.status(400).json({
      status: 'error',
      message: 'Current password is incorrect',
    });
  }

  //3. If so, update password
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;

  await user.save();
  // 4. Log the user in, send JWT
  createSendToken(user, 200, res);
  console.log(user);

  next();
};
const authController = {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
};

export default authController;
