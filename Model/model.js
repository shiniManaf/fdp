const mongoose=require ('mongoose');


mongoose.connect("mongodb+srv://Shiny:shiny@cluster0.hldguib.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected");
})
.catch(err=>console.log(err));
let schema=mongoose.Schema;
const employeeSchema=new schema({
    sname:String,
    age:Number,
    pos:String,
    salary:Number
})

var employeeModel=mongoose.model("employees",employeeSchema);
module.exports=employeeModel;