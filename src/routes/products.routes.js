import { Router } from 'express';
const router = Router();

router.get("/",(req,res)=>{
    res.send("Getting all products...")
})
router.get("/:id",(req,res)=>{
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
