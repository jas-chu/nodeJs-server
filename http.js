var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer();

server.on("request", function(req, res){
	var urlData = url.parse(req.url, true);
	var pathname = urlData.pathname;
	if (pathname === '/'){
		pathname = '/index.html';
	}
	var filePath = "public" + pathname;
	fs.exists(filePath, function(exists){
		if (exists) {
			fs.readFile("public" + pathname, function(err, data){
				if (err){
					res.writeHead(500);
					res.end("No existe el path: " + pathname);
				} else {
					res.end(data);
				}
			})
		} else {
			res.writeHead(404);
			res.end("No existe!" + filePath);
		}
	});
});

server.listen(process.env.PORT || 3000);


//lee un pathname desde la urlData busca un fichero con esa ruta dentro de ./public
//si existe, lo sirve
//si no existe, devuelve 404.
