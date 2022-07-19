console.log('Funcion Constructora');

function Personaje (nombre, vida) {
    this.nombre = nombre
    this.vida = vida
}

const personaje1 = new Personaje('Mr Java', 100)