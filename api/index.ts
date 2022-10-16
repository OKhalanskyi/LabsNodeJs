import http  from "http";

const port = 4308
const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`started`)
    console.log('started')
})
server.listen(port)