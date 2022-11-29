class producto{
    constructor(id, nombre, precio, imagen){
        this.id=id
        this.nombre=nombre
        this.precio=precio
        this.imagen =imagen
    }
}

const product0 = new producto(0, `Rollo de arranque`, 290,"");
const product1 = new producto(1, "Bulto de camisetas", 290,"");
const product2 = new producto(2, "Bolsas de consorcio", 500,"");
const product3 = new producto(3, "Paquete X100 bandeja de carton ", 350, "");


//array
const productos = [
    product0, 
    product1, 
    product2, 
    product3
];


const contenedorProductos = document.getElementById(`contenedorProductos`)
productos.forEach(producto=>{
    contenedorProductos.innerHTML +=`  
  <div id="${producto.id}" class="card cardProdbaste">
  <div class"card-body">
  <img src=${producto.imagen}>

  <h4 class="card-tittle">${producto.nombre}</h4>
  <p class="card-text">${producto.precio}</p>                                            
  <button id="${producto.id}" class="btn btn-primary">AGREGAR</button>
  </div>
  </div>
`
})


//carrito
let carrito
const carritoStorage = JSON.parse(localStorage.getItem(`carrito`))
if(carritoStorage){
    carrito = carritoStorage
}else{
    carrito=[]
}

console.log (carrito)
const botonesAgregar = document.querySelectorAll(`.btn-primary`)


botonesAgregar.forEach(boton=>{
    boton.onclick = () => {
         const productoseleccionado = productos.find(
            (p) => p.id===parseInt (boton.id))
         
            

            const productoCarrito = { ...productoseleccionado, cantidad: 1}

            const indexCarrito =carrito.findIndex(
                (prod) => prod.id === productoCarrito.id 
            )
            
            if(indexCarrito=== -1) {
                carrito.push(productoCarrito)
            } else {
                carrito[indexCarrito].cantidad++
            }
         
        } 
})



// boton finalizar
const botonFinalizar = document.querySelector(`#cerrar`)
botonFinalizar.onclick = () => {
   
   
const totalcompra = carrito.map(prod=>prod.precio * prod.cantidad).reduce((elem1,elem2) => elem1+elem2)
   
     console.log(totalcompra)
}
