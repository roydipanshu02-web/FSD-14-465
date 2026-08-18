import http from "http";

const server = http.createServer();
server.on('request',(req,res)=>{
    res.write("<h1>Welcome to Server Side Programming</h1>");
    res.write("<h2>Nodemon is Tracking the files</h2>");
    res.end();
});

server.listen(5000, () => {
    console.log("Server is running");
});