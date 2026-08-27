import http from 'http';

const server = http.createServer((req, res) => {
res.writeHead(200, {contentType: "application/json"});
const product = {
    name: "Mobile",
    price: 2500,
    discount: "5%",
    company: "Realme"
}
res.end(JSON.stringify(product));
});

server.listen(3000, () => {console.log("Server is running...")});