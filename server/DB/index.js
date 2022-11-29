const mongoose=require("mongoose")
const usersDataBase=process.env.USERS_DATA_BASE

mongoose.connect(usersDataBase,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("user database connected"))
.catch((error)=>console.log("connection to database faild"+error.massage))

module.exports=mongoose.connection