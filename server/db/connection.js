import mongoose from 'mongoose';

const connection = () => {

mongoose.connect('mongodb+srv://issaalali991:jYikyIRCYIE21doY@cluster0.lew9w6o.mongodb.net/mernproject?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connected');
})
.catch((error) => {
    console.log('Error:', error.message);
});
}



export default connection;