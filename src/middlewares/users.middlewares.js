 // Creating all products,validate
export const validateProductInformation=(req,res,next)=>{
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
    next();

}