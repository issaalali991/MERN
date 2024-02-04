import mongoose from 'mongoose';

const connection = () => {
const connection = process.env.MONGODB_URI ;
mongoose.connect(connection)
.then(() => {
    console.log('Database connected');
})
.catch((error) => {
    console.log('Error:', error.message);
});
}



export default connection;