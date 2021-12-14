//ใช้งาน mongoose
const mongoose = require('mongoose')
//เชื่อมไปยัง mongoDB
const dburl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

//ออกแบบ Schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    image:String
})
//สร้าง Model
let Product =mongoose.model("products",productSchema)

//ส่งออก Model
module.exports = Product

//ออกแบบฟังก์ชั่นาำหรับบันทึกข้อมูล

module.exports.saveProduct = function(model,data){
    model.save(data)
}