const productsDB = require("../models/productsModel");
const bcrypt= require("bcryptjs")
const key=process.env.SECRET_KEY;

const getAllProducts = async (req, res) => {
    await productsDB.find({}).then((result, error) => {
      if (error) {
        return res.status(400).json({
          success: false,
          massage: error,
        });
      }
      if(result.length===0){
          return res.status(300).json({
              success:false,
              massage:"there are no products available"
          })
      }
      return res.status(200).json({
          success:true,
          result
      })
    });
  };
  const addNewProduct= async (req,res)=>{
      await productsDB.insertMany(req.body)
      .then(()=>res.status(300).json({success:true,massage:"success in adding new product"}))
      .catch(error=>res.status(400).json({success:false,error}))
  }

  module.exports={
    getAllProducts,
    addNewProduct
  }