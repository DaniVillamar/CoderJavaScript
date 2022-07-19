console.log('Arrays');

const productos = ['Celular','Mouse','Teclado','Monitor','Cable']

console.log('Tamaño: ' + productos.length);

function pintarCarrito() {
   /* for (let i = 0; i<productos.length; i++){
        console.log('<h1>' + productos[i] + '</h1>');
    }*/
    productos.forEach( productos => {
        console.log('<h1>' + productos + '/<h1>');
    })
}

//pintarCarrito();

productos.push('impresora');


pintarCarrito();