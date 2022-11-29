const mongoose= require("mongoose")
const schema=mongoose.Schema

const productsSchema= schema({
    id:{type:Number, required:true},
    name:{type:String, required:true},
    company:{type:String, required:true},
    productType:{type:String,required:true},
    price:{type:String, required:true},
    barcode:{type:Number,required:false},
    
})

module.exports=mongoose.model("products",productsSchema)