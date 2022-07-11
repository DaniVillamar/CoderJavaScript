console.log('Ejemplo estra');

/*
 */

let comando = prompt(' Que opcion quieres hacer (Promedio, Suma, Multiplicacion)');

switch (comando) {
    case 'promedio':

        const TOTAL_OPCIONES = prompt('Cuantas calificaciones quieres sacar');
        let total = 0;
        for (let i = 0; i < TOTAL_OPCIONES; i++) {
            console.log('Iteracion' + i);
            total = total + parseInt(prompt('Dame una calificacion'));
        }
        let promedio = total / TOTAL_OPCIONES;
        alert('El promedio es: ' + promedio);
        break;
    case 'Suma':

        break;
    case 'Multiplicacion':

        break;

    default:
        break;
}