console.log('Ejemplo estra');

/*
 */

let comando = prompt(' Que Productos deseas Llevar (Frutas, Verduras, Carnes)');

switch (comando) {
    case 'Frutas':

        const TOTAL_OPCIONES = prompt('Cuantas Frutas vas a llevar: ');
        let total = 0;
        for (let i = 0; i < TOTAL_OPCIONES; i++) {
            console.log('Iteracion' + i);
            nombre = prompt('Nombre de la fruta')
            total = total + parseInt(prompt('Que precio tiene'));
        }
        let totalFrutas = total;
        alert('El Total de tus Frutas es: ' + totalFrutas);
        if (totalFrutas >= 100) {
            alert('Ganaste un cumpon para tu siguiente compra del 20%')
        } else if (totalFrutas < 100) {
            alert('Lamentablemente no ganastes un cupon por pobre')
        }
        break;
    case 'Verduras':

        const TOTAL_OPCIONES2 = prompt('Cuantas Verduras vas a llevar: ');
        let total2 = 0;
        for (let g = 0; g < TOTAL_OPCIONES2; g++) {
            console.log('Iteracion' + g);
            nombreV = prompt('Nombre de la Verdura')
            total2 = total2 + parseInt(prompt('Que precio tiene'));
        }
        let totalVerduras = total2;
        alert('El Total de tus Verduras es: ' + totalVerduras);
        if (totalVerduras >= 100) {
            alert('Ganaste un cumpon para tu siguiente compra del 20%')
        } else if (totalVerduras < 100) {
            alert('Lamentablemente no ganastes un cupon por pobre')
        }
        break;
    case 'Carnes':
        const TOTAL_OPCIONES3 = prompt('Cuantas tipos de carne vas a llevar: ');
        let total3 = 0;
        for (let g = 0; g < TOTAL_OPCIONES3; g++) {
            console.log('Iteracion' + g);
            nombre3 = prompt('Nombre de la Carne')
            total3 = total3 + parseInt(prompt('Que precio tiene'));
        }
        let totalCarnes = total3;
        alert('El Total de tus Verduras es: ' + totalCarnes);
        if (totalCarnes >= 100) {
            alert('Ganaste un cumpon para tu siguiente compra del 20%')
        } else if (totalCarnes < 100) {
            alert('Lamentablemente no ganastes un cupon por pobre')
        }
        break;

    default:
        break;
}