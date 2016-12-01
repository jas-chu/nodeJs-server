var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer();

server.on("request", function(req, res){
	var urlData = url.parse(req.url, true);
	var pathname = urlData.pathname;
	fs.exists(pathname, function(){
		fs.readFile("./public" + pathname, function(){
			console.log("readfile");
		})
	});
	res.end(JSON.stringify("./public" + pathname));
});

server.listen(process.env.PORT || 3000);


//fs.exists(path, callback)
//fs.readFile(path, callback)

//lee un pathname desde la urlData busca un fichero con esa ruta dentro de ./public
//si existe, lo sirve
//si no existe, devuelve 404.