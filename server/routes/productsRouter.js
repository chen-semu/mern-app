const{
    getAllProducts,
    addNewProduct
}=require("../controlers/productsCntrl")
const router= require("express").Router()

router.get("/",getAllProducts)
router.post("/",addNewProduct)
// router.get('/byId/:id',getUserById)

module.exports= router