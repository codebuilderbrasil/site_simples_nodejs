const express = require("express") ;

const app = express() ;

app.use(express.static("public"));

//arrow function >>> função anonima que usa a setinha
(req, res)=>{}

function raiz(req, res){
    res.send("") ;
}
var renato = function(req, res){
    res.send("Entrou na página do Renato") ;
}

app.get("/", raiz) ;
app.get("/usando_arrow", (req, res)=>{
    res.send("aqui usa arrow");
}) ;
app.get("/renato", renato) ;

app.listen(8000) ;