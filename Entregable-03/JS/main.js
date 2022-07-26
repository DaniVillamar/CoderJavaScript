let comando = prompt(' Que Productos deseas Llevar (Snacks, Cocina, Cena, proximoProductos)');

function OPCIONES() {
    const TOTAL_OPCIONES = prompt('Cuantas Productos vas a llevar: ');
    let total = 0;
    for (let i = 0; i < TOTAL_OPCIONES; i++) {
        console.log('Iteracion' + i);
        nombre = prompt('Nombre del Prdocuto')
        total = total + parseInt(prompt('Que precio tiene'));
    }
    let totalFrutas = total;
    alert('El Total de tus Prodcutos es: ' + totalFrutas);
    if (totalFrutas >= 100) {
        alert('Ganaste un cumpon para tu siguiente compra del 20%')
    } else if (totalFrutas < 100) {
        alert('Lamentablemente no ganastes un cupon por pobre')
    }
}

function Agradecimiento() {
    alert('Gracias por tu pedido, tu pedido se esta armando.')
}

function proximoP() {
    const carrito = [];

        const producto = {
            nombre: 'Monitor de 32 Pulgadas',
            precio: 500
        }
        const producto2 = {
            nombre: 'Iphone XS',
            precio: 3000
        }

        const producto3 = {
            nombre: 'Teclado XS',
            precio: 200
        }

        // Agregar al Final del Arreglo
        carrito.push(producto2);
        carrito.push(producto);
        carrito.push(producto);

        // Agregar el articulo al principio del Carrito
        carrito.unshift(producto3)

        alert('Fijate en la consola los productos nuevos que se van a agregar')
        console.table(carrito);
}

switch (comando) {
    case 'Snacks':

        OPCIONES();
        Agradecimiento();

        break;
    case 'Cocina':

        OPCIONES();
        Agradecimiento();

        break;
    case 'Cena':

        OPCIONES();
        Agradecimiento();

        break;

    case 'proximoProductos':
        proximoP();
        break;

    default:
        break;
}