var http = require("http");
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res){
	var urlData = url.parse(req.url, true);
	urlData.query['id'];
	res.end(JSON.stringify(urlData));

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

//lee un pathname desde la urlData busca un fichero con esa ruta dentro de ./public
//si existe, lo sirve
//si no existe, devuelve 404.