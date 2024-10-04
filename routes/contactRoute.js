const express=require("express")
const router=express.Router()
const Contact=require("../models/contact.js")
//add new Contact
router.post("/add",async(req,res)=>{
    const {name,email,phone}=req.body
const newContact=new Contact({name,email,phone})
const contact=await newContact.save()
res.send({msg:"contact saved !",contact})

})

//fetch all
router.get("/getall",async(req,res)=>{
    const contacts=await Contact.find()
    res.send({msg:"contact fetched !",contacts})
})
module.exports=router