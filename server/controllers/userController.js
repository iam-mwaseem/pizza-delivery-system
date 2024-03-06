import User from '../models/userModel.js';
import pizzaMenu from '../pizzas.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
      data: error,
    });
  }
  next();
};

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

export const updateMe = async (req, res, next) => {
  //1. Create error if user POSTs password data
  /* if (req.body.password || req.body.passwordConfirm) {
    throw new Error(
      'This route is not for password updates. Please use /updateMyPassword.',
    );
  } */

  // ***mY part ***///
  const user = await User.findById(req.user._id).select('+password');
  console.log(user);
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
  user.name = req.body.name;
  user.email = req.body.email;
  user.address = req.body.address;

  await user.save();
  /*2. Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');

  //3. Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  */

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     user: updatedUser,
  //   },
  // });
  next();
};
export const deleteMe = async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

export const getMenu = (req, res, next) => {
  res.send(pizzaMenu);
  res.status(204).json({
    status: 'success',
    pizzaMenu,
  });

  // res.status(204).json({
  //   status: 'success',
  //   data: pizzaMenu,
  // });
};

const userController = {
  getAllUsers,
  updateMe,
  deleteMe,
  getMenu,
};

export default userController;
