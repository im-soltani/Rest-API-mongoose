//import express
const express=require("express")
const connectDB=require("./config/connectDB")
//instance express
const app=express()
//port 
const port =4000
app.use(express.json())
connectDB()
app.use("/api/contact",require("./routes/contactRoute.js"))

app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})