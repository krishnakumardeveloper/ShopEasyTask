const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req,res)=>{
    res.send("welcome to ShopEasy From Kriz Code !")
})

const server = app.listen(PORT, ()=>{
    console.log(`Server Running Port On ${PORT}`);
    
})

module.exports = {app, server }