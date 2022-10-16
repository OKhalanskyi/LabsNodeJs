import http  from "http";
import dotenv from "dotenv"

dotenv.config({path:".env.dev"})
const {PORT} = process.env
const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`started`)
    console.log(`started on ${PORT}`)
})
server.listen(PORT||7777)