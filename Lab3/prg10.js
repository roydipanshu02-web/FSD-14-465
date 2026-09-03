import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req,res)=> {
    console.log("method:",req.method);
    
    if(req.url === "/" && req.method === "GET"){
        res.end("<h1>Products details</h1>");
    }
    else if(req.url === '/products' && req.method === 'GET'){
    res.writeHead(200,{"content-type":"text/json"});
    const stream = createReadStream('./data/product.json',
        {encoding: "utf-8"}
    )
    stream.pipe(res);

    }
    else{
        res.statusCode=404;
        res.end("not found");
    }
});

server.listen(6969,()=> console.log("prg10 is running at port 6969"));