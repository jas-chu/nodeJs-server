
fs = require('fs')
fs.createReadStream(process.arg[2])
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

//leer txt de la carpeta y que imprima la cantidad de lineas

//nodejs.org/api/...

//usar readstring