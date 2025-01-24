// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos") // Obtenemos el objeto por id
const input = document.querySelector('input'); // hacemos que selecione el input quitando el . de .input y cambiamos su nombre a "input"

for (let i = 0; i < productos.length; i++) {
  var div = document.createElement("div") // Cambiamos el nobre de la variable a "div"
  div.classList.add("producto")

  var parrafo = document.createElement("p")
  parrafo.classList.add("titulo") // No existe la clase titulo en css, asi que la creamos
  parrafo.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(parrafo)
  div.appendChild(imagen)

  li.appendChild(div)
}

//displayProductos(productos) // No es necesaria la funcion asi que la comentamos
const botonDeFiltro = document.getElementById("button"); // Creamos un id en el boton y lo seleccionamos por el

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  texto = texto.toLowerCase() // antes de verificar se hace minusculas
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  