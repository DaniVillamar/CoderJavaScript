console.log('Ejemplo Calificaciones');

let lower = 0
let upper = 10
let passed = 7;


let grade1 = parseInt (prompt('Ingresa tu calificacion 1'));
let grade2 = parseInt (prompt('Ingresa tu calificacion 2'));
let grade3 = parseInt (prompt('Ingresa tu calificacion 3'));

if(grade1 >= lower && grade1<= 10){
    console.log('Califiaciones Validas ');
    if(!(grade1>=passed)){
        alert('aprobado ');
    }
}else{
    console.log('No validas');
}