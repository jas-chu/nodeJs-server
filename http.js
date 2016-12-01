var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer();

server.on("request", function(req, res){
	var urlData = url.parse(req.url, true);
	var pathname = "public" + urlData.pathname;
	urlData.query['path'];
	res.end(JSON.stringify(pathname));

	//var f=new Date();
	//cad=f.getHours()+":"+f.getMinutes(); 
	//res.end(cad);
});

server.listen(process.env.PORT || 3000);


function fileExists(path) {
  try {
    if(fs.accessSync(path)) {
      return true;
    }
  } catch (e) {
    return false;
  }
}

//fs.exists(path, callback)
//fs.readFile(path, callback)

//lee un pathname desde la urlData busca un fichero con esa ruta dentro de ./public
//si existe, lo sirve
//si no existe, devuelve 404.