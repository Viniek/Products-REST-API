import pkg from 'pg';
const { Pool }=pkg;
 const pool=new Pool({
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port:3000,
    database:"products"
 })
 export default pool;