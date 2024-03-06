import mongoose from 'mongoose';

const checkoutSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  date: Date,
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

export default Checkout;
