const validator = require("validator")
const isEmpty= require("is-empty")

module.exports= validateRegister= (user)=>{
    errors={};
    user.Email = isEmpty(user.Email)?"":user.Email
    user.Password = isEmpty(user.Password)?"":user.Password
    
    if(validator.isEmpty(user.email)) errors.email="email is required"
    if(validator.isEmail(user.email)) errors.email="email isn't valid"
    if(validator.isEmpty(user.Password)) errors.Password="Password is required"
}