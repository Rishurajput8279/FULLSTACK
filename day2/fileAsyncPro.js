const fs=require("fs/promises")
const { myWriteFile } = require("../day1/filesyn")
const { throwDeprecation } = require("process")
function myReadFileA(){
    try{
        const res=fs.readFile("dummy.txt","utf-8")
        res.then((data)=>{
            console.log("File data :",data)
        })
        .catch((err)=>{
            throw err
        })

    }
    catch(err){
        console.log("File Reading error:",err.message)
    }
}
function myWriteFileA(data){
    try{
        const res=fs.writeFile("dummy.txt",data)
        res.then(()=>{
            console.log("writing successfully")
        })
        .catch((err)=>{
            throw err
        })
    }
    catch(err){
        console.log("File Write error: ",err.message)
    }
}
myReadFileA()
myWriteFileA("vatsal hello")
myReadFileA()