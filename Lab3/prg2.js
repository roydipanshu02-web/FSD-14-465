import http from "http";

const server = http.createServer((req,res) => {
           res.writeHead(400,{"content-type": "text/html",});


           res.end("<h1>Welcome to Server</h1>");
});

const PORT = 6969;

server.listen(PORT , () => console.log("server is Running..."));