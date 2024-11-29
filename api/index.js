import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import feedRouter from './routes/feed.route.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB!')
}).catch((err)=>{
    console.log(err)
});

const dbURI = `mongodb://localhost:27017/`;

mongoose
.connect(dbURI)
.then(() => {
  app.listen(3000);
  console.log("MongoDB connected...");
})
.catch((err) => console.log(err));
app.use(ErrorHandler)

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/feed",feedRouter)


app.use((err,req,res,next)=>{

    const statusCode=err.statusCode|| 500;
    const message=err.message||'internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
});
    






