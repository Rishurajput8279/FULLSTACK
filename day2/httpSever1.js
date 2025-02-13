const http=require("http")
const Server=http.createServer((req,res)=>{
    const url=req.url
    if(url=="/home" && req.method=="GET"){
        res.write("<h1>My Home Page</h1>");
    }
    else if(url==="/about" && req.method=="POST"){
        res.write("<h1>My about page</h1>")
    }
    else{
        res.write("<h1>error page</h1>")
    }
    res.end()
})
Server.listen(3001,()=>{
    console.log("Server is running on port 3001");
})