import jwt from 'jsonwebtoken';
 

const adminAuth=async(req,res,next)=>{
   try{
    const {token}=req.headers;
    if(!token){
       return res.json({success:false,message:"access denied no token provided"})
    }
     const token_decode=jwt.verify(token,process.env.JWT_SECRETE);
     if(token_decode.email!==process.env.ADMIN_EMAIL ){
        return res.json({success:false,message:"email unauthorized admin"})
     }
     next();
   }
   catch(error){
      return res.json({success:false,message:"it occur error in admin auth"})
   }
}
export default adminAuth;