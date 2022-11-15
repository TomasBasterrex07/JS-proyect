
class Product{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }

    Restarstock(){
        this.stock = this.stock - 1;
        console.log(`ah cambiado el stock de ${this.nombre}`)
    }
}

const product0 = new Product(0, "Rollo de arranque", 360, 10);
const product1 = new Product(1, "Bulto de camisetas", 290, 20);
const product2 = new Product(2, "Bolsas de consorcio", 500, 100);


const productos = [product0, product1, product2];

const carrito = []

let productDispo = "Estos son los productos disponibles: "

function agregarcarrito(){
    for (item of productos){
        productDispo += ` \n ${item.id} - ${item.nombre} al precio de $ ${item.precio} `
    }

    productDispo += ` \n ingrese el numero de item del producto que quiera añadir a su carrito. Para finalizar escriba 99`

    let respuesta = parseInt(prompt(productDispo))


    while( isNaN(respuesta)){
        alert("Solo se debe ingresar numeros")
        respuesta = parseInt(prompt(productDispo))
    }

    while(respuesta != 99){
        switch(respuesta){
            case 0: 
               carrito.push(productos[0])
               alert(`Se agrego ${productos[0].nombre} al carrito`)
               productos[0].Restarstock()
               break;
            case 1:
                carrito.push(productos[1])
               alert(`Se agrego ${productos[1].nombre} al carrito`)
               productos[1].Restarstock()
               break;
            case 2:
                carrito.push(productos[2])
               alert(`Se agrego ${productos[2].nombre} al carrito`)
               productos[2].Restarstock()
               break;  

            default:
                alert("Producto no disponible")
                break;
        }
        respuesta = parseInt(prompt(productDispo))
    }

    alert("Tu pedido ah sido procesado")
    vercarrito()

}

let productcarrito = `Detalle del pedido: `
let preciocarrito = 0

agregarcarrito()



function vercarrito(){
    for (itemselegidos of carrito){
        productcarrito += `\n - ${itemselegidos.nombre}`
        preciocarrito += itemselegidos.precio
    }

    alert(`PEDIDO: \n ${productcarrito} \n El total del pedido es: ${preciocarrito} `)
     
}

