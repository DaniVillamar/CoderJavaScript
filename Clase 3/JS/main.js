console.log('Primeros For del Curso');

//for (let contador = 1; contador <= 5; contador = contador + 2) {
 //   console.log(contador);
//}

//let suma = 0;

//for(let i = 0; i <= 10; i++ ){
 //   suma = suma + i;
//}
//console.log(suma);


let suma = 0;

for(let i = 0; i <= 1000; i++ ){
    suma = suma + i;

    if(suma>=1000){
        console.log('El valor de la suma es ' + i);
        break;
    }
}

console.log(suma);
