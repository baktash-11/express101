const http = require("http");

// http req
const server = http.createServer((req, res) => {
  console.log("request model");
  console.log(req);
  if (req.url === "/") {
    //header
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>Hello world</h2>");
    res.end();

  }else if (req.url === '/about') {
      res.writeHead(200, {"content-type": "text/html"});
      res.write("<h2> Baktash Sana </h2>" );
      res.end();

    
      
  } else if(req.url ==="/contact") {
      res.writeHead(200, {'content-type': 'text/html'});
      res.write('<p>email-address:  baktash@live.ca</p> </br> <p>contact-number: 9054421991 </p> ')
      res.end();
  }else{
      res.writeHead(404, {'content-type': 'text/html'});
      res.write('<h3> Sorry this page does not exist</h3>')
      res.end();
  }
});

server.listen(3000, () => console.log("http://localhost:3000"));
