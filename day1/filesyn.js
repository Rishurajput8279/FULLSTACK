const fs=require("node:fs")
const { userInfo } = require("node:os")
function myReadFile(){
    try{
        const data=fs.readFileSync("dummy.txt","utf-8")
        if(data){
            console.log("File Data",data)
        }
        else
            throw err
    }
    catch(err){
        console.log("File Error: ",err.message)
    }
}
function myWriteFile(data){
    
    try{
        // const data="Hello How are you"
        fs.writeFileSync("dummy.txt",data)
    }
    catch(err){
        console.log("File Writing error :",err.message)
    }
}
module.exports={myReadFile:myReadFile,
                myWriteFile:myWriteFile,
                username: "Reshu"
            }
// myReadFile()
// myWriteFile()
// myReadFile()