import http from "http";
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
  const text = await readFile("big.txt");
  res.end(text);
});

server.listen(3000, () => console.log("Server is running..."));