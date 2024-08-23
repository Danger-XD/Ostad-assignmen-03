const http = require("http");
const fs =require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("This is the Home Page.");
        res.end();
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("This is the About Page.");
        res.end();
    }
    else if(req.url === "/contact"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("This is the Contact Page.");
        res.end();
    }
    else if(req.url === "/file-write"){
        fs.writeFile("demo.txt", "hello world",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200, {"Content-Type": "text/plain"});
                res.write("File created successfully");
                res.end();
            }
        })
    }
    else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("File not found");
        res.end()
    }
})

server.listen(5500,()=>{
    console.log('Server started on port 5500');
})