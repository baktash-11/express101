const http = require ('http');

// http req
const server = http.createServer((req, res)=>{
    console.log("request model");
    console.log(req);

    //header 
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h2>Hello world</h2>')
    res.end();

});



server.listen(3000, ()=>console.log('http://localhost:3000'));