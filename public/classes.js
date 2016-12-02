/**
 * Created by jsella on 11/29/16.
 */

var Articulo = function(titulo, contenido){
    this.titulo = titulo;
    this.contenido = contenido;

};

// No siempre es necesario poner prototype porque no siempre es necesario instanciar.
Articulo.prototype.render = function(){
    return '<article><div><h1>' + this.titulo + '</h1></div><div><p>' + this.contenido + '</p></div>';
};

var ManejadorDeArticulos = {};

ManejadorDeArticulos.load = function (){
    this.articulos = [];

    var articulo1 = new Articulo('Titulo 1', 'Contenido');
    this.articulos.push(articulo1);
    this.articulos.push(new Articulo('Titulo 2', 'Contenido2'));
};

ManejadorDeArticulos.render = function(){
    var result = "";
    for (var i = 0; i < this.articulos.length; i++){
        result += this.articulos[i].render();
    }
    document.getElementById('article').innerHTML = result;
};


// Tener una variable global que me indice si se va a abrir en la misma pagina o en otra el articulo
// render(withLink que sea true false)
var samePage = true;

// hacer un paginador:
// ManejadorDeArticulos.renderPager('elementId');