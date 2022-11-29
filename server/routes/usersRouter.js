const {
    getAllUsers,
    addNewUser,
    getUserById,
}=require("../controlers/usersCntrl")
const router= require("express").Router()

router.get("/",getAllUsers)
router.post("/",addNewUser)
router.get('/byId/:id',getUserById)

module.exports= router
