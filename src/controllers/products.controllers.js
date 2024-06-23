import pool from "../db.config.js";
// Getting all products
export const getAllproducts=async(req,res)=>{
    try{
      const result= await  pool.query("SELECT * FROM products");
      res.status(200).json({success: true,data:result.rows}); 
  } catch(err){
      res.status(500).json({sucsess:false,message:err.message})
    }
  }
  // getting single product
  export const getSingleproduct =async(req,res)=>{
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
}
// Creating all products
export const createProduct =async(req,res)=>{
    try{
        const product_thumbnail=req.body.product_thumbnail;
        const product_title=req.body.product_title;
        const product_description=req.body.product_description;
        const product_cost=req.body.product_cost;
        const on_offer=req.body.on_offer;
        if(!product_thumbnail) return res.status(400).json({success:false,message:"product_thumbnail is required"});
        if(!product_title) return res.status(400).json({success:false,message:"product_title is required"});
        if(!product_description) return res.status(400).json({success:false,message:"product_description is required"});
        if(!product_cost) return res.status(400).json({success:false,message:"product_cost is required"});
        if(!on_offer) return res.status(400).json({success:false,message:"on_offer  is required"});
        const insert=await pool.query("INSERT INTO products (product_thumbnail, product_title,product_description,product_cost,on_offer)VALUES($1,$2,$3,$4,$5)",[product_thumbnail,product_title,product_description,product_cost,on_offer]);
        // res.send(insert)
    
        if (insert.rowCount=== 1){
            res.status(201).json({success:true, message:"wohoo! product created succesfully"});
        }
    }
    catch(err){
      res.status(500).json({success:false,message:err.message})  
    }
}
// Updating a single product
export const updateProduct=async(req,res)=>{
    const{product_thumbnail,product_title,product_description,product_cost,on_offer}=req.body;
    const id=req.params.id;
    
    try{
        let updateOperation;
        if(product_thumbnail){
        updateOperation=await pool.query("UPDATE products SET product_thumbnail=$1 WHERE id=$2",[product_thumbnail,id]);
        }
        if(product_title){
            updateOperation=await pool.query("UPDATE products SET product_title=$1 WHERE id=$2",[product_title,id]);
            }
            if(product_description){
                updateOperation=await pool.query("UPDATE products SET product_description=$1 WHERE id=$2",[product_description,id]);
                }
                if(product_cost){
                    updateOperation=await pool.query("UPDATE products SET product_cost=$1 WHERE id=$2",[product_cost,id]);
                    }
                    if(on_offer){
                        updateOperation=await pool.query("UPDATE products SET on_offer=$1 WHERE id=$2",[on_offer,id]);
                        }
                        if(updateOperation.rowCount==1){
                            res.status(201).json({success:true,message:"wohoo! Update successfull..."});
                        }else{
                            res.status(400).json({success:false,message:"ooops!,couldnt update product.."});
                        }
        res.json(updateOperation);
    }catch (err){
        res.status(500).json({success:false, mesage: err.message});
    }
    // res.send("Updating a single product...")
}
// Deleting a single product 
export const deleteProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const deleteOperation=await pool.query("DELETE FROM products WHERE id=$1",[id]);
        if (deleteOperation.rowCount ==1){
            res.status(200).json({success:true, message: "wohoo!Product deleted successfully"})
        }else{
            res.status(400).json({success:false, message: "oops! invalid product"})
        }
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
    }