const http=require("http")
const { json } = require("stream/consumers")
const port=3003
const data=[{
    id:1,
    name:"Reshu Jayant",
    Email:"Rishurajput070@gmail.com"
}]
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url=="/users" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(data))
    }
    else if(url=="/users" && req.method=="POST"){
        var body=''
        req.on("data",(chunk)=>{
            body+=chunk
        })
        req.on("end",()=>{
            const parsedData = JSON.parse(body);
            const { name, Email } = parsedData;
            const newID=data.length>0?(data[data.length-1].id+1):1001
            const newUser={id:newID ,name,Email};
            data.push(newUser);
        })
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify({status: "success",message:"User created"}))
    }
    else{
        res.writeHead(404, {"Content-Type": "application/json"})
        res.write(JSON.stringify({status: "fail",message:"page Not found"}))
    }
    res.end()
})

server.listen(port,(err)=>{
    try{
        if (err) throw err
        console.log(`Server is running on port ${port}`)
    }
    catch(err){
        console.log("Server error",err.message)
    }
})