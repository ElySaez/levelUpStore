const precios = [];
const cantidades = [];
const carousel = document.querySelector('#carousel');
const footer = document.getElementById("myFooter");
const windowHeight = window.innerHeight;

let cantidadCarrito = document.getElementById('cantidad-carrito');
let totalCarrito = document.getElementById('total-carrito');
let botonesAgregarCarrito = document.getElementsByClassName('agregar-carrito');
let botonRefrescarCarrito = document.getElementById('refresh-carrito');
let botonModoOscuro = document.getElementById('modo-oscuro');
let botonAceptarTerminos = document.getElementById('aceptar-terminos');
let terminosAceptados = false;
let myButton = document.getElementById("myButton");
let myPopup = document.getElementById("myPopup");
let close = document.getElementsByClassName("close")[0];

botonAceptarTerminos.addEventListener('click', function () {
  terminosAceptados = true;
  myPopup.style.display = "none";
});

botonModoOscuro.addEventListener('click', function () {
  document.body.classList.toggle('modo-oscuro');
});

botonRefrescarCarrito.addEventListener('click', function () {
  cantidadCarrito.innerText = '0';
  totalCarrito.innerText = '0';
  precios.length = 0;
  cantidades.length = 0;
});

function agregarAlCarrito(precio) {
  if (terminosAceptados) {
    const index = precios.indexOf(precio);
    if (index === -1) {
      precios.push(precio);
      cantidades.push(1);
    } else {
      cantidades[index]++;
    }

    cantidadCarrito.innerText = cantidades.reduce((total, cantidad) => total + cantidad, 0).toString();
    totalCarrito.innerText = precios.reduce((total, precio, index) => total + precio * cantidades[index], 0).toString();
  } else {
    alert('Debes aceptar los términos y condiciones que están al final de la página para agregar productos al carrito');
  }
}
for (let i = 0; i < botonesAgregarCarrito.length; i++) {
  botonesAgregarCarrito[i].addEventListener('click', function () {
    agregarAlCarrito(parseFloat(this.dataset.precio));
  });
}

myButton.addEventListener("click", function () {
  myPopup.style.display = "block";
});

close.addEventListener("click", function () {
  myPopup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
    myPopup.style.display = "none";
  }
});

/* Banner */
const carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 3000 // Cambiar imagen cada 3 segundos
});

/*Footer*/
window.addEventListener('scroll', function() {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    // Muestra el pie de página
    document.getElementById('myFooter').style.display = 'block';
  } else {
    // Oculta el pie de página
    document.getElementById('myFooter').style.display = 'none';
  }
});

/*Formulario*/
/* document.querySelector("#myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previene que se envíe el formulario automáticamente
  const name = document.querySelector("#nameInput").value;
  const email = document.querySelector("#emailInput").value;
  const message = document.querySelector("#messageInput").value;
  
  // Crea un objeto FormData con los datos del formulario
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  
  // Envía los datos utilizando Fetch API
  fetch("tu-url-de-destino", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("¡Datos enviados correctamente!");
      document.querySelector("#myForm").reset();
    } else {
      throw new Error("Error al enviar los datos");
    }
  })
  .catch(error => {
    alert(error.message);
  });
}); */

