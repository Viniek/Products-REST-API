import { Router } from 'express';
const router = Router();

router.get("/",async(req,res)=>{
  try{
    const result= await  pool.query("SELECT * FROM products");
    res.status(200).json({success: true,data:result.rows}); 
} catch(err){
    res.status(500).json({sucsess:false,message:err.message})
  }
})
router.get("/:id",async(req,res)=>{
    const id=req. params.id;
    try{
        await pool.query('SELECT * FROM products WHERE id=$1",[id]');
    } 
    catch(err){
        res.status(500).json({success:false,messsage:err.message});
    }
    res.send("getting a single product...")
})
router.post("/",(req,res)=>{
    res.send("creating a product....")
})
router.patch("/:id",(req,res)=>{
    res.send("Updating a single product...")
})
router.delete("/:id",(req,res)=>{
    res.send("Deleting a single product...")
})
export default router;
