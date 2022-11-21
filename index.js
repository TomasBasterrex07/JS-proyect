function saludo(){
    let nombrepersona = prompt("Indique su nombre")
    let apellidopersona = prompt("Indique su apellido")

    alert(`Bienvenido ${nombrepersona} ${apellidopersona} espero estes teniendo un buen dia`)
} 

alert("Bienvenido a la papelera Peter Pan")
saludo()




let opciones = parseInt(
    prompt(
    "Que producto es de su interes: 1.Rollo de arranque 2.Bulto de camisetas 3.Bolsas de consorcio"
    )
    )
let total = 0
let continuar = true
let decision 

while (continuar === true) {
    if (opciones===1) { 
        total = total + 360
    } else if (opciones===2) {
        total = total + 290
    }
    else if (opciones===3) {
        total = total + 500
    }
    else {
    opciones = parseInt(prompt("Producto inexistente por favor escoja de nuevo: 1.Rollo de arranque 2.Bulto de camisetas 3.Bolsas de consorcio"))
      continue
    }
  
  
    decision = parseInt(prompt("Quiere elegir mas productos? 1.Si 2.NO"))
     if (decision === 1) {
        opciones = parseInt(
            prompt(
                "Que producto es de su interes: 1.Rollo de arranque 2.Bulto de camisetas 3.Bolsas de consorcio"
                  )
                )
     } else if(decision === 2) {
        continuar = false
     }
     else{
        opciones = parseInt(prompt("Que producto es de su interes: 1.Rollo de arranque 2.Bulto de camisetas 3.Bolsas de consorcio"))
 
     }

}

alert(`El total de la compra es ${total} `)
