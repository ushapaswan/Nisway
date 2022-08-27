const express = require("express");
const app = express()
app.use(express.json())
// app.use(cookie());
const route = require("./route")
app.use("/",route)

app.listen(3000,()=>{
    console.log("listning to port");
})