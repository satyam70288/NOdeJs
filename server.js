const http=require('http');

const server=http.createServer((req,res)=>{
    res.end("my name is satyam");
});
server.listen(4000,()=>{
    console.log("listening")
})
