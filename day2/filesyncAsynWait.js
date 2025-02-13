const fs=require("fs/promises")
async function myReadFileW() {
    try{
        const res=await fs.readFile("dummy.txt","utf-8")
        console.log("File Data: ",res)
    }
    catch(err){
        console.log("Readinf file error: ",err.message)
    }
}
async function myWriteFileW(data) {
    try{
        await fs.writeFile("dummy.txt",data)
        console.log("success")
    }
    catch(err){
        console.log("Readinf file error: ",err.message)
    }
}
myReadFileW()
myWriteFileW("Vatsal hehehhe")
myReadFileW()