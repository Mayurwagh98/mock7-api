let jsonServer = require("json-server")
let server = jsonServer.create()
let router = jsonServer.router("db.json")
let middlewares = jsonServer.defaults()
let port = process.env.PORT || 3000

server.use(middlewares)
server.use('/',router)
server.listen(port , ()=>{
    console.log("hello")
})