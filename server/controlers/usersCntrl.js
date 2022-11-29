const usersDB = require("../models/usersModel");
const bcrypt= require("bcryptjs")
const jwt=require("jsonwebtoken")
const validateRegister=require("../validation/register")
const key=process.env.SECRET_KEY;

const getAllUsers = async (req, res) => {
  await usersDB.find({}).then((result, error) => {
    if (error) {
      return res.status(400).json({
        success: false,
        massage: error,
      });
    }
    if(result.length===0){
        return res.status(300).json({
            success:false,
            massage:"the collection data is empty"
        })
    }
    return res.status(200).json({
        success:true,
        result
    })
  });
};
const addNewUser= async (req,res)=>{
    await usersDB.insertMany(req.body)
    .then(()=>res.status(300).json({success:true,massage:"success in adding new user"}))
    .catch(error=>res.status(400).json({success:false,error}))
}

const getUserById= async (req,res)=>{
  await usersDB.findById(req.params.id)
  .then((result)=>res.status(300).json({success:true,massage:`success in finding user: ${result}`}))
  .catch(error=>res.status(400).json({success:false,error}))
}

const register= async (req,res)=>{
  const {isValid, errors}= validateRegister(req.body.user)
  if(!isValid) return res.status(400).json(errors);
  await usersDB.findOne({email:req.body.user.email},)
  .then((err,user)=>{
    if(err) return res.status(400).json(err);
    if(user) return res.json({massage:"email already taken"});
    bcrypt.genSalt(10)
    .then((salt)=>{
      bcrypt.hash(req.body.user.password,salt)
      .then(async (hashPassword)=>{
        req.body.use.password=hashPassword;
        await usersDB.insertMany(req.body)
        .then(()=>{res.send("success")})
        .catch(err=>res.send(err))
      })
      .catch(err=>{console.log(err);})
    })
    .catch(error=>{console.log(error);})
  })
}

const logIn=async (req,res)=>{
  await usersDB.findOne({email:req.body.user.email})
  .then(user=>{
    bcrypt.compare(req.body.user.password,user.password)
    .then(isMatch=>{
      if(isMatch){
        const payload ={
          id:user.id,
          name:user.name,
          email:user.email,
        }
        jwt.sign(payload,key,{expiresIn:"3h"},(err,token)=>{
          err?console.log(err):res.json({token:`Bearer |${token}`})
        })
      }
      return res.send("incorrect password")
    })
  })
  .catch(err=>{console.log(err)})
}

module.exports= {getAllUsers, addNewUser, getUserById, register,}
