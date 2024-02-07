const Pool = require('pg').Pool

const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
});
pool.connect((err)=>{
    if(err)
    {
        console.log("connection db failed."+ err)
    }
    else{
        console.log("connection db success!")
    }
})
module.exports = pool;