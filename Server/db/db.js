const { Pool } = require('pg');
require('dotenv').config(); 
console.log(typeof(process.env.PASSWORD))
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.NAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});
console.log("connected....to db")
module.exports = pool;

