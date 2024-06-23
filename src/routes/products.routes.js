import { Router } from 'express';
import pool from '../db.config.js';
const router = Router();

// Getting all products
router.get("/",async(req,res)=>{
  try{
    const result= await  pool.query("SELECT * FROM products");
    res.status(200).json({success: true,data:result.rows}); 
} catch(err){
    res.status(500).json({sucsess:false,message:err.message})
  }
})
// getting single product
router.get("/:id",async(req,res)=>{
    const id=req.params.id;
    try{
       const result= await pool.query('SELECT * FROM products  WHERE id=$1',[id]);
    if(result.rowCount==0){
        res.status(404).json({success:false,message:err.message})
    }
    else{
        res.status(200).json({success:true,data:result.rows[0]})
    }
    } 
    catch(err){
        res.status(500).json({success:false,messsage:err.message}) ;
    }
    // res.send("getting a single product...")
})
// Creating all products
router.post("/",(req,res)=>{
    res.send("creating a product....")
})
// Updating a single product
router.patch("/:id",(req,res)=>{
    res.send("Updating a single product...")
})
// Deleting a single product
router.delete("/:id",(req,res)=>{
    res.send("Deleting a single product...")
})
export default router;
