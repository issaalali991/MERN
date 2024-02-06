import mongoose from 'mongoose';
import connection from '../connection.js';

connection();
const userSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    user_name: String,
    email: String,
    password: String,
  });

const userModel = mongoose.model('user', userSchema);

export default userModel;