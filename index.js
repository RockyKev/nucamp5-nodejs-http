const http = require('http');

const hostname = 'localhost';
const port = 3000;


const server = http.createServer((request, response) => {

    const inlineHTML = '<html><body><h1>Hello, World!</h1> </body> </html>';

    console.log(request.headers);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(inlineHTML);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)

})