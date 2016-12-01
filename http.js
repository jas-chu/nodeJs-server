var http = require("http");
var server = http.createServer();

server.on("request", function(req, res){
	var f=new Date();
	cad=f.getHours()+":"+f.getMinutes(); 
	res.end(cad);
});

server.listen(process.env.PORT || 3000);