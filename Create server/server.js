//create a server using node

const http = require('http');

const PORT = 3020;
const HOSTNAME = 'localhost';

const server= http.createServer((req,res) => {
    res.end('Server is created by Rupesh Kumar');
})

server.listen(PORT,() => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
})