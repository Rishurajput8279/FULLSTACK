const {myReadFile,myWriteFile,username}=require("./filesyn")
myReadFile()
const data="File data my WT Class"
myWriteFile(data)
myReadFile()

// for append 
// fs.appendFileSync(filename,data)
// to delete a file
// fs.unlinkSync(filename)