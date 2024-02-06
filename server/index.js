import express from 'express';
import userRouter from './Routes/userRouter.js';
import connection  from "./db/connection.js";


const app = express();
const PORT=3000


app.use(express.json());

 app.use('/users', userRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});