import { Router } from 'express';
import{ getAllproducts,getSingleproduct, createProduct,updateProduct,deleteProduct}from '../controllers/products.controllers.js';
const router = Router();


router.get("/",getAllproducts)
router.get("/:id",getSingleproduct)


router.post("/",createProduct)
router.patch("/:id",updateProduct)
router.delete("/:id",deleteProduct)
export default router;