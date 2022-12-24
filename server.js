const http = require("http");
const fs = require("fs");

const PORT = 9000;

fs.readFile("./index.html", (error, html) => {
  if (error) throw error;
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    })
    .listen(PORT);
});
