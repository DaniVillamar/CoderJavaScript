// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const pagarCarritoBtn = document.querySelector('#pagar-carrito');
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

     // Al Pagar el carrito
     vaciarCarritoBtn.addEventListener('click', pagarCarrito);


     // NUEVO: Contenido cargado
     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
          // console.log(articulosCarrito);
          carritoHTML();
     });
}


// Función que añade el curso al carrito
function agregarCurso(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;
          // Enviamos el curso seleccionado para tomar sus datos
          leerDatosCurso(curso);
     }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = articulosCarrito.map( curso => {
               if( curso.id === infoCurso.id ) {
                    let cantidad = parseInt(curso.cantidad);
                    cantidad++
                    curso.cantidad =  cantidad;
                    return curso;
               } else {
                    return curso;
               }
          })
          articulosCarrito = [...cursos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }

     console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const curso = e.target.parentElement.parentElement;
          const cursoId = curso.querySelector('a').getAttribute('data-id');
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

     // NUEVO:
     sincronizarStorage();

}


// NUEVO: 
function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}

function pagarCarrito(){
     swal("Good job!", "You clicked the button!", "success")
}

const mp = new MercadoPago("YOUR_PUBLIC_KEY");


const cardForm = mp.cardForm({
     amount: "100.5",
     iframe: true,
     form: {
       id: "form-checkout",
       cardNumber: {
         id: "form-checkout__cardNumber",
         placeholder: "Numero de tarjeta",
       },
       expirationDate: {
         id: "form-checkout__expirationDate",
         placeholder: "MM/YY",
       },
       securityCode: {
         id: "form-checkout__securityCode",
         placeholder: "Código de seguridad",
       },
       cardholderName: {
         id: "form-checkout__cardholderName",
         placeholder: "Titular de la tarjeta",
       },
       issuer: {
         id: "form-checkout__issuer",
         placeholder: "Banco emisor",
       },
       installments: {
         id: "form-checkout__installments",
         placeholder: "Cuotas",
       },        
       identificationType: {
         id: "form-checkout__identificationType",
         placeholder: "Tipo de documento",
       },
       identificationNumber: {
         id: "form-checkout__identificationNumber",
         placeholder: "Número del documento",
       },
       cardholderEmail: {
         id: "form-checkout__cardholderEmail",
         placeholder: "E-mail",
       },
     },
     callbacks: {
       onFormMounted: error => {
         if (error) return console.warn("Form Mounted handling error: ", error);
         console.log("Form mounted");
       },
       onSubmit: event => {
         event.preventDefault();

         const {
           paymentMethodId: payment_method_id,
           issuerId: issuer_id,
           cardholderEmail: email,
           amount,
           token,
           installments,
           identificationNumber,
           identificationType,
         } = cardForm.getCardFormData();

         fetch("/process_payment", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             token,
             issuer_id,
             payment_method_id,
             transaction_amount: Number(amount),
             installments: Number(installments),
             description: "Descripción del producto",
             payer: {
               email,
               identification: {
                 type: identificationType,
                 number: identificationNumber,
               },
             },
           }),
         });
       },
       onFetching: (resource) => {
         console.log("Fetching resource: ", resource);

         // Animate progress bar
         const progressBar = document.querySelector(".progress-bar");
         progressBar.removeAttribute("value");

         return () => {
           progressBar.setAttribute("value", "0");
         };
       }
     },
   });

