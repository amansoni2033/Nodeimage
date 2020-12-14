 const express = require("express");
 const app = express();

app.get("/", (req, res)=>{
    res.send("<h1> my node app is running...!</h1>");
});





 app.listen(8000, ()=>{
     console.log("App is running at port 8000");
 });