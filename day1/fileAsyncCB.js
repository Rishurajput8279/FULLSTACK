const fs=require("fs")
function myReadFile(){
    try{
        const data=fs.readFile("dummy.txt","utf-8",(err,data)=>{
            if(err){
                throw err
            }
            else{
                console.log("File Data :",data)
            }
        })
    }
    catch(err){
        console.log("File Reading error: ",err.message)
    }
}
myReadFile()