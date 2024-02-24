const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.write('<h1>Hello Node.js Creating first server with the help of http module</h1>');
    }
    else if(req.url =='/about/call') {
        res.write('<h1>About  call page!</h1>')
    }
    else if(req.url == '/index') {
        res.write('<h1>Index Page of Website</h1>')
    }
    else if(req.url == '/home') {
        res.write('<h1>Home Page of Website</h1>')
    }
    else if(req.url == '/contact') {
        res.write('<h1>Contact Page of Website</h1>')
    }
    res.end();
})

server.listen(5001);

console.log("The Http sever is running at port 5001");

