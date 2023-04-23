const carrito = [];
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


botonAceptarTerminos.addEventListener('click', function() {
  terminosAceptados = true;
  myPopup.style.display = "none";
});

botonModoOscuro.addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
  });
  

botonRefrescarCarrito.addEventListener('click', function() {
  cantidadCarrito.innerText = '0';
  totalCarrito.innerText = '0';
  carrito.length = 0;
});

function agregarAlCarrito(precio) {
  if (terminosAceptados) {
    carrito.push(precio);
    cantidadCarrito.innerText = carrito.length.toString();
    totalCarrito.innerText = carrito.reduce(function(total, precio) {
      return total + precio;
    }, 0).toString();
  } else {
    alert('Debes aceptar los términos y condiciones para agregar productos al carrito');
  }
}

for (let i = 0; i < botonesAgregarCarrito.length; i++) {
  botonesAgregarCarrito[i].addEventListener('click', function() {
    agregarAlCarrito(parseFloat(this.dataset.precio));
  });
}

myButton.addEventListener("click", function() {
    myPopup.style.display = "block";
  });
  
  close.addEventListener("click", function() {
    myPopup.style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == myPopup) {
      myPopup.style.display = "none";
    }
  });