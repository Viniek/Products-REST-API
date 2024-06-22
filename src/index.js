import express from 'express';
import productsRouter from './routes/products.routes.js';
import pool from './db.config.js';
const app=express();


app.use("/products",productsRouter);
app.listen(5000,()=>{
    console.log("App running on port 5000")
})