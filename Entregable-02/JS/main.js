let comando = prompt(' Que Productos deseas Llevar (Snacks, Cocina, Cena)');

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

    default:
        break;
}