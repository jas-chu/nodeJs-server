/**
 * Created by jsella on 11/29/16.
 */
window.onload = function(){
    // alert("hola mundo");
    // alert(factorial(5));
    // alert(mesNumToText(1));
    ManejadorDeArticulos.load();
    ManejadorDeArticulos.render();

};

window.onmousemove = function(e){
    var titulo = parseInt(Math.random() * 5);
    // document.getElementById('test').innerHTML = '<h' + titulo + '>Hola</h' + titulo +'>';
    document.getElementById('factorial').innerHTML = '<h1>' +  factorial(parseInt(Math.random() * 5)) + '</h1>';
}

factorial = function(n){
    if (n < 2) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

var meses = ['Enero', 'Febrero', 'Marzo'];

var mesNumToText = function(mes){
    return meses[mes];
}
