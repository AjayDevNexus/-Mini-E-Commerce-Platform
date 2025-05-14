//Local running use comment code
/* const { Pool } = require('pg');
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
*/
//Render deploymeny
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  
});

pool.connect()
  .then(client => {
    console.log("Connected to database...");
   
  })
  .catch(err => {
    console.error("Database connection error:", err.stack);
  });

module.exports = pool;

