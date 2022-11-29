const mongoose= require("mongoose")
const schema=mongoose.Schema

const usersSchema= schema({
    id:{type:Number, required:true},
    fullName:{type:String, required:true},
    birthDate:{type:Date, required:false},
    email:{type:String,required:true},
    password:{type:String,required:true},
})

module.exports=mongoose.model("users",usersSchema)