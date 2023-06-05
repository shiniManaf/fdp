//importing
const express=require("express");
const empModel=require('./model/model')
//2. initializing
const app=new express();
//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//API creation
//app.get(url,callbakfn)
app.get('/',(req,res)=>{
    res.send("hai")
})
app.get('/about',(req,res)=>{
res.send("About page")
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    
    res.send("post ai")

})
app.post('/new',(req,res)=>{
    console.log(req.body)
    new empModel(req.body).save()
    res.send("reccord send")

})
//get
app.get('/view',async(req,res)=>{
    var data = await empModel.find();
    res.send(data);

})
//delete
app.delete('/remove/:id',async(req,res)=>{
    let id=req.params.id
    await empModel.findByIdAndDelete(id)
    res.send("Deleted")

})
//update
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id;
    await empModel.findByIdAndUpdate(id,req.body)
    res.send("upadated")

})
//port
app.listen(3005,(req,res)=>{
    console.log("port is running in 3005")
})
