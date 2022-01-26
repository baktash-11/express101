const http = require("http");

// fs giving node access to this computer file system
const fs = require("fs");

// http req
const server = http.createServer((req, res) => {
  console.log("request model");
  console.log(req);
  if (req.url === "/") {
    //header
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h2>Hello world</h2>");
    const homePageHTML = fs.readFileSync("index.html");

    res.write(homePageHTML);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2> Baktash Sana </h2>");
    res.end();
  } else if (req.url === "/images.png") {
    res.writeHead(200, { "content-type": "image/png" });
    const image = fs.readFileSync("images.png");
    res.write(image);
    res.end();
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    const style = fs.readFileSync("style.css");
    res.write(style);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h3> Sorry this page does not exist</h3>");
    res.end();
  }
});

server.listen(3000, () => console.log("http://localhost:3000"));
