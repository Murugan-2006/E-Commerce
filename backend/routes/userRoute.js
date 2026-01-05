import express from 'express'
import { loginuser,adminuser,registerUser } from '../controller/userController.js'
const userRouter=express.Router();
userRouter.post('/register',registerUser);
userRouter.post('/login',loginuser);
userRouter.post('/admin',adminuser);


export default userRouter;