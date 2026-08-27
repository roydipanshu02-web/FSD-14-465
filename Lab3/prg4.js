import http from 'http';

const server = http.createServer((req, res) => {
if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
}
else if (req.url === "/product") {
    res.end("<h1>Product Page</h1>");
}
else if (req.url === "/cart") {
    res.end("<h1>Cart Page</h1>");
}
else if (req.url === "/checkout") {
    res.end("<h1>Checkout Page</h1>");
}
else {
    res.statusCode = 404;
    res.end(`
        <h1>Page Not Found</h1>
        <p>Page Not Found</p>
        <a href="/">Home</a>
    `);
}
});

server.listen(4444, () => {
    console.log("Server is running...");
});