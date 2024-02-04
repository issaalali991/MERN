import mongoose from 'mongoose';
import connection from '../connection.js';

connection();
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    id: String,
});

const userModel = mongoose.model('users', userSchema);

export default userModel;