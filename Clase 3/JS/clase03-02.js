// Ejemplos While

let contador = 0;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

/* Ejemplos DoWhile
do {
    console.log(contador);
} while (contador <= 10);

//Ejemplo 2

let entrada = '';

do {
    entrada = prompt('dame un comando')
} while (entrada != 'exit');
*/

let entrada = '';

do {
    entrada = prompt('dame un comando')
    
        if (entrada== 'exit') {
            continue
        }
        
        switch (entrada) {
        case 'hello':
            alert('LS lista los archivos y directorios')
            break;
        case 'pwd':
            alert('Nos dice la ruta actual')
            break;
        case 'cd':
            alert('cd Cambia directorio')
            break;
        case 'mkdir':
            alert('mkdir Crea directorio')
            break;
        case 'touch':
            alert('touch Crea directorio')
            break;
    }
} while (entrada != 'exit');