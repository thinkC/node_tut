const http = require("http");

// const server = http.createServer((req, res)=>{
//     res.write("welcome to my homepage");
//     res.end();
// })
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to my homepage');
    }
    if(req.url === '/about'){
        res.end('This is the about page')
    }
    res.end(`<h1>Page not found</h1>`)
})

server.listen(7000,()=>{
    console.log("server listening on port 7000");
})