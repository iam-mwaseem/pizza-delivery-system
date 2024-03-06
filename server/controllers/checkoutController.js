import Checkout from '../models/checkoutModel.js';
import stripe from 'stripe';

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckout = async (req, res, next) => {
  const newCheckout = await Checkout.create({
    productId: req.body.productId,
    description: req.body.description,
    size: req.body.size,
    price: req.body.price,
    quantity: req.body.quantity,
    total: req.body.total,
  });

  res.status(200).json({
    status: 'success',
    data: newCheckout,
  });
};

const checkoutContoller = {
  createCheckout,
};

export default checkoutContoller;
