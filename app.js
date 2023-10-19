const express = require("express")
const app = express()
const path = require("path")


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.use(express.static("public"));

app.listen(3030,()=>{
    console.log("Servidor Corriendo en el puerto 3030")
});


