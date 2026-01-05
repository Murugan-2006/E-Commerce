/*
Why use validator?
To check email format
To validate URLs
To verify phone numbers
To sanitize user input
To prevent invalid data
*/
/*Why do we use bcrypt?
❌ Never store passwords like this:
password: "123456"
If the database is hacked → all passwords are exposed.
✅ With bcrypt:
$2b$10$yD4...jRkP*/
// jwt
/* Use of JWT in Node.js

JWT (JSON Web Token) is used in Node.js to authenticate users and secure APIs. After a user logs in successfully, the server generates a JWT and sends it to the client. This token is then included in every subsequent request to verify the user’s identity, allowing access to protected routes without requiring repeated logins.

JWT helps maintain stateless authentication, improves application scalability, and is commonly used in web and mobile applications to manage user sessions securely.*/
import validator from 'validator'
import bcrypt  from 'bcrypt'
import userModel from "../models/userModels.js";
import jwt from 'jsonwebtoken'

// ctreate token 
const createToken=(id)=>{
  return jwt.sign({id},process.env.JWT_SECRETE)
}
// user login
const loginuser = async (req, res) => {
  try{
    const {email,password}=req.body;

  const user=await userModel.findOne({email});
  if(!user){
 return res.json({success:false,message:"email not present"})
  }
    const ismatch=await bcrypt.compare(password,user.password);
    if(!ismatch){
       return res.json({success:false,message:"invalid password"});
    }
    const token = createToken(user._id)
    return res.json({success:true,message:"successfully login to you accound"},{token});
  
  }
  catch(error){
      console.log(error);
       return res.json({success:false,message:"error in mt code"})

  }
  
};

// register user
const registerUser = async (req, res) => {
  try{
     const {name,email,password}=req.body;
    // to check if the userid (email ) is already existed or not
    const exist=await userModel.findOne({email});
     if(exist){
      return res.json({success:false,message:"user already present inmy database"})
     }
     //--- to validate the email 
     if(!validator.isEmail(email)){
    return res.json({success:false,message:"invalid email"})
  } 
  //  generate the salt(random string  of password)
  const salt=await bcrypt.genSalt(10);
  const newpassword=await bcrypt.hash(password,salt);
   const newuser= new userModel({
    name,
    email,
    password:newpassword
   })
   const user=await newuser.save();

   const token=createToken(user._id);
   res.json({success:true,token});
}
  catch(error)
{
   console.log(error);
       return res.json({success:false,message:"error in mt code"})


  }
 
};

// admin login
const adminuser = async (req, res) => {
  try{
    const {email,password}=req.body;
  if(email==process.env.ADMIN_EMAIL || password==process.env.ADMIN_PASSWORD){
      const token=jwt.sign({email,password},process.env.JWT_SECRETE,{expiresIn:'1d'});
      return res.json({success:true,token});
  }
  else{
    return res.json({success:false,message:"invalid admin details"});
  }
}
  catch(error){
      console.log(error);
       return res.json({success:false,message:"error in mt code"})

  };
}

export { loginuser, adminuser, registerUser };
