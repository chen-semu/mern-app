const validator = require("validator")
const isEmpty= require("is-empty")

module.exports= validateRegister= (user)=>{
    errors={};
    user.Name = isEmpty(user.Name)?"":user.Name
    user.Email = isEmpty(user.Email)?"":user.Email
    user.Password = isEmpty(user.Password)?"":user.Password
    user.PasswordConfirmation = isEmpty(user.PasswordConfirmation)?"":user.PasswordConfirmation
    
    if(validator.isEmpty(user.Name)) errors.Name="full name is required"
    if(validator.isEmpty(user.email)) errors.email="email is required"
    if(validator.isEmail(user.email)) errors.email="email isn't valid"
    if(validator.isEmpty(user.Password)) errors.Password="Password is required"
    if(validator.isEmpty(user.PasswordConfirmation)) errors.PasswordConfirmation="the password repetition isn't the same"
}