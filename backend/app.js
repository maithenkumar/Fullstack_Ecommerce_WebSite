const express = require("express");
const app = express();
const port = 3000;
const dotenv=require('dotenv')
const path = require('path');
dotenv.config({path:path.join(__dirname, 'config','config.env')})
app.use('/',()=>{
    console.log("Hello world!");
    return ("hellw World! ")
})
app.listen(process.env.PORT, () => {
  console.log(`server running in ${process.env.PORT} in ${process.env.NODE_ENV}  `);
});
