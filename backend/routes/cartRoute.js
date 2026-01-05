import express from 'express';
import { getUserCart,addToCart,updateCart}from '../controllers/cartController.js';
 import {authUser} from '../middlewares/authMiddleware.js';
const cartRouter=express.Router();

cartRouter.post('/add',authUser,addToCart);
cartRouter.get('/get',authUser,getUserCart);
cartRouter.put('/update',authUser,updateCart);

export default cartRouter;