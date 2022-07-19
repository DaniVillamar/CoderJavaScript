console.log('Objetos Literales');

const personaje = {
    nombre: '',
    vida: 100,
    magia: 100,
    poder: 1,
    nivel: 1
}
console.log(personaje);

//Personaje recibio un ataque
personaje.vida = 80;

console.log(personaje);

personaje['nivel'] = 2;

console.log(personaje);