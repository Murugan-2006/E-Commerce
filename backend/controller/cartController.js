const { default: userModel } = require("../models/userModels");



// add to the card
exports.addToCart = async (req, res) => {
     const {userId,ItemId,quantity}=req.body;
     
     try{
     const userDate=await userModel.findById(userId);
   const parchasedData=userDate.parchasedData;     

        if(!userDate){
            return res.json({success:false,message:"user not found"})
    }
    }catch(error){
        console.log(error);
        return res.json({success:false,message:"error"})
    }
}
// user get card
exports.getUserCart = (req, res) => {

}

// update card
exports.updateCart = (req, res) => {

}