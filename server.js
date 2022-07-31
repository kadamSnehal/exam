var express=require('express');
var app=express();

app.get("/",(req,resp)=>{
    resp.send("<h2>Welcome</h2>");
});

app.get("/aboutus",(req,resp)=>{
    resp.send("<h2>Nothing to describe !!!!!</h2>")
});
app.listen(3000);
console.log("server started at port no 3000");