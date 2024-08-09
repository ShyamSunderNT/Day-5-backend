import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import userrouter from "./Routers/userrouter.js"


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin:"*",
    credentials:true
}))

connectDB();
app.use('/api',userrouter)

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to our api");
  })



  app.listen(process.env.PORT,()=>{
    console.log("App is started at the end port");
})