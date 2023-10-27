const http= require('http');
const hostname = 'localhost'
const PORT = process.envPORT || 8000;

const server = http.createServer((req,res) => {
    if (req.url === "/"){
        res.writeHead(200,{"Content-Type" : "text/plain"});
        res.write("Hello World");
        res.end();
    }else if(req.url === "/about"){
        res.writeHead(200,{"Content-Type" : "text/plain"});
        res.write("About page");
        res.end();
    }else if (req.url === "/admin"){
        res.writeHead(200,{"Content-Type" : "text/plain"});
        res.write("Admin page");
        res.end()
    }
    else {
        res.end('Invalid Request!');
    }
});


server.listen(PORT,() => {
    console.log(`Server running at http://${hostname}:${PORT}`);
});