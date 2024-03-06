import mongoose from 'mongoose';

import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({ path: './config.env' });
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log('Connected to MongoDB');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
