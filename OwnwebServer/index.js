
const http = require("http");
const server = http.createServer((req,res)=>{
   if(req.url ==="/")
   {
    res.end("Welcome TO The Home Page");
   }
   else if(req.url ==="/about")
   {
    res.end("About Page");
   }
   else if(req.url === "/contact")
   {
    res.end("Contact Us Page");
   }
   else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end("<h2>404 Page Not Found.</h2>");
   }
});

server.listen(8000,"127.0.01",()=>{
    console.log("Listening to the port no 8000");
});
