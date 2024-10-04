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

//delete Contact
router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    console.log(id)
   const contact=await  Contact.findOneAndDelete({_id:id})
    res.send({msg:"contact deleted !", contact})

})

//edit contact
router.put("/edit/:id",async(req,res)=>{
    const {id}=req.params
    const contact=await Contact.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:"contact updated",contact})
})
module.exports=router