const http=require('http');

let server=http.createServer();
server.on('request',function(req,res){res.end("hello world1!");});
server.listen(3001);
