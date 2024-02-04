import mongoose from 'mongoose';

const connection = () => {
const connection = process.env.MONGODB_URI ;
const user_name = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const database = process.env.MONGODB_DATABASE;
mongoose.connect(`mongodb+srv://${user_name}:${password}@cluster0.lew9w6o.mongodb.net/${database}?retryWrites=true&w=majority`	)
.then(() => {
    console.log('Database connected');
})
.catch((error) => {
    console.log('Error:', error.message);
});
}



export default connection;