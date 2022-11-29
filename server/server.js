const dotenv=require("dotenv")
dotenv.config()
const mongoose= require("mongoose")
const express= require("express")
const app= express()
const cors= require("cors")
const port= 8080
const db=require("./DB")
// const io=require('socket.io')(server)
const passport=require("passport")
require("./config/passport")(passport)
const  path= require("path")


const usersRouter=require("./routes/usersRouter")
const productsRouter=require("./routes/productsRouter")


app.use(passport.initialize())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/users",usersRouter)
app.use("/products", 
// passport.authenticate("jwt",{session:false}),
productsRouter)


// io.on('connection',(socket)=>{
//     socket.on('massage',(txtMsg)=>{
//         io.emit('massage', txtMsg)
//     })
// })


app.listen(port,(error)=>{
    console.log(process.env.CONNECTION_STRING);
    if(error){
        console.log(`faild to connect to port: ${port}`);
        return
    }
    console.log(`successful in connecting to port: ${port}`);
    return})

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../client/build")))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, "../client/build", 'inde.html'))
    })
}