const express=require('express');
const fs=require('fs')
const app=express()
const readjsondata=()=>{
   const jsondata=fs.readFileSync('db.json');  
   return JSON.parse(jsondata)
}
app.get('/',(req,res)=>{
   res.send("<h1>homepage</h1>")
})
app.get('/about',(req,res)=>{
   res.send("THIS IS ABOUT PAGE")
})
app.get('/user',(req,res)=>{
   const name=req.query.q;
   res.send("welcome "+name)
})
app.get('/userage',(req,res)=>{
   const age=req.query.age;
   if(age>=18 && age<100)
   {
       console.log("you are eligible to drive")
       res.send("you are eligible to drive")
   }
   else if(age>=100)
   {
       res.send("Its impossible to predict")


   }
   else{
      
       console.log("you are not eligible to drive")
       res.send("you are not eligible to drive")
   }
})
app.get('/data',(req,res)=>{
       const dt=readjsondata();
       res.send(dt)
})
app.listen(3000,()=>{
   console.log("server is runnning");
})
