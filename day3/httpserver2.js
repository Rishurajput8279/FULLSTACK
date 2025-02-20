const http=require("http")
const server =http.createServer(async(req,res)=>{
    res.setHeader("content-Type","application")
    res.statusCode=200;
    const data=await fetch("https://api.github.com/search/users?q=location:ghaziabad")
    const datajson=await data.json();
    const newdata=datajson.items
    
})

server.listen(3001,(err)=>{
    try{
        if(err) throw err
        console.log("Server is running on port 3001")
    }
    catch(err){
        console.log("Server Error:",err.message)
    }
})