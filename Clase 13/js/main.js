console.log('Sweet Alert');

const boton = document.getElementById('miBoton');

boton.onclick = () => {
    console.log('click');

    Swal.fire({
        icon: 'hubo un error',
        title: 'nooo....',
        text: 'Algo salio mal.',
        footer: <a href=''></a>
    })
}