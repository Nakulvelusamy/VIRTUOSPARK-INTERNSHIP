const express=require('express');
const mongoose=require('mongoose')
async function connect()
{
  await mongoose.connect("mongodb+srv://nakulvelusamyperumalgounder:Nakul_123@nakul.r8yfp.mongodb.net/");
  console.log("db connected");
}
connect()
const server=express();
const Phonebook= new mongoose.Schema(
   {
       name:String,
       phone:String,
       location:String
   },
   {
     collection:'PHONEBOOK'
   }
)
const Model= mongoose.model('PHONEBOOK',Phonebook)
server.get('/',(req,res)=>{
   res.send("app is working fine")
})
server.get('/db',async (req,res)=>{
       const data = await Model.find({});
       res.json(data)
})
server.get('/db/:id', async (req,res)=>{
       const data= await Model.findOne({ _id: req.params.id })
       // console.log(data);
       res.json(data)
})
// server.post(‘/postdata’)
server.get('/add', async (req,res)=>{
   const data=new Model()   // step1 creating instance of model
   // step-2 declaring data using model instance (data)
   data.name="Nakul_V"
   data.phone="99988811212"
   data.location="sathy-1"
   // step-3 saving the data created
   await data.save()
   console.log("data saved");
   res.json(data)
})
// server.delete(‘/delete/:id’)
server.get('/delete/:id',async (req,res)=>{
       await Model.deleteOne({ _id : req.params.id})
})
server.listen(8000,()=>{
   console.log("server is running");
})




// GITHUB API
// https://api.github.com/users/


// endpoints
// /users - GET - READ
