import express from 'express';
import cors from 'cors';

import authController from './controllers/authController.js';
import userController from './controllers/userController.js';
import checkoutContoller from './controllers/checkoutController.js';
import cookieParser from 'cookie-parser';

const app = express();

//This middleware is responsible for parsing the request body and making it available in req.body
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   }),
// );
/*
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // Allow sending cookies with requests
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  }),
);
*/
// app.use((req, res, next) => {
//   // console.log(req.headers);
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);

//   next();
// });

app.get('/', (req, res, next) => {
  res.send("Hello from server. You're looking for this !");

  next();
});

app.get('/menu', userController.getMenu);

app.post('/signup', authController.signup);
app.post('/signin', authController.signin);

app.post('/forgotpassword', authController.forgotPassword);
app.patch('/resetpassword/:token', authController.resetPassword);

app.patch('/updateMe', authController.protect, userController.updateMe);
app.delete('/deleteMe', authController.protect, userController.deleteMe);
app.patch(
  '/updatepassword',
  authController.protect,
  authController.updatePassword,
);
app.post('/checkout', authController.protect, checkoutContoller.createCheckout);
app.get(
  '/api/v1/getalluser',
  authController.protect,
  userController.getAllUsers,
);

export default app;
