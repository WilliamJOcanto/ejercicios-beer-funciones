// Primera parte:

const printMessage = message => console.log(message)
printMessage("Hola mundo lindo")

// Segunda parte:

const createMultplication = (number1, number2) =>{
    let result = number1 * number2
    return result
}
createMultplication(2, 3)

// Tercera parte:

const array = [1,2,3,4,5,6,7,8,9]
const nuevoArray = array.map(numero => {
    return createMultplication(numero, 2)
})

console.log(nuevoArray);

// Cuarta parte:

function cervezasMayorAlcohol(arrayPreexistente){
    const listaNivelAlcohol = arrayPreexistente.toSorted((a, b) => {
        if(a.abv>b.abv){
            return -1
        }
        if(a.abv<b.abv){
            return 1
        }
        return 0
    })
    listaNivelAlcohol.splice(0,15)
    return listaNivelAlcohol
}
console.log(cervezasMayorAlcohol(beers));


// Quinta parte:

function cervezasMayorAlcohol(arrayPreexistente){
    const listaNivelAlcohol = arrayPreexistente.toSorted((a, b) => {
        if(a.ibu>b.ibu){
            return 1
        }
        if(a.ibu<b.ibu){
            return -1
        }
        return 0
    })
    listaNivelAlcohol.splice(0,15)
    return listaNivelAlcohol
}
console.log(cervezasMayorAlcohol(beers));

// Sexta parte:

function nombreCerveza(arrayPreexistente, nombre){
    const cervezaSeleccionada = arrayPreexistente.find(elemento => {
       return elemento.name === nombre
    })
       if (cervezaSeleccionada) {
        return cervezaSeleccionada
       }else{
        console.log(`No existe ninguna cerveza con el nombre ${nombre}`);
       }

    return cervezaSeleccionada
}
console.log(nombreCerveza(beers, "Bad Pixie"));

// Septima parte:

function ibuCerveza(arrayPreexistente, amargorAlcohol){
    const cervezaSeleccionada = arrayPreexistente.find(elemento => {
       return elemento.ibu == amargorAlcohol
    })
       if (cervezaSeleccionada) {
        return cervezaSeleccionada
       }else{
        console.log(`No existe ninguna cerveza con un ibu de: ${amargorAlcohol}`);
       }

    return cervezaSeleccionada
}
console.log(ibuCerveza(beers, "60"));

// Octava parte:

function posicionCerveza(nombre){
    const posicion = beers.findIndex(cerveza => cerveza.name == nombre)
    if (posicion != -1) {
        return posicion
    }else{
       return console.log(`${nombre} no existe`);
    }
}
console.log(posicionCerveza("Buzz"));

// Novena parte:

function nuevoObjeto(arrayPreexistente, numeroAbv){
    let nuevaListaCerveza = []
    arrayPreexistente.forEach(element => {
        if (element.abv <= numeroAbv) {
            nuevaListaCerveza.push({name : element.name,
                                    abv: element.abv,
                                    ibu : element.ibu
            })
        }
    })
    return nuevaListaCerveza
}
console.log(nuevoObjeto(beers, 5));

// Decima parte:

function nuevaLista(array, propiedad, booleano){
    let nuevoArray 
    if(booleano){
        nuevoArray = array.toSorted((a,b) => {
            let elementoA = a[propiedad]
            let elementoB = b[propiedad]
            if(elementoA < elementoB){
                return -1
            }
            if(elementoA > elementoB){
                return 1
            }
            return 0
        })
    }else{
        nuevoArray = array.toSorted((a,b) => {
            let elementoA = a[propiedad]
            let elementoB = b[propiedad]
            if(elementoA < elementoB){
                return 1
            }
            if(elementoA > elementoB){
                return -1
            }
            return 0
        })
    }
    return nuevoArray
}

console.log(nuevaLista(beers, "id", false));

// Onceava parte:

let table = document.getElementById("tabla")

function crearThead(){
    let thead = document.createElement("thead")
    return thead
}

function crearTbody(){
    let tbody = document.createElement("tbody")
    return tbody
}

function crearFilaHead(){
    let tr = document.createElement("tr")
    return tr
}

function crearFilaBody(){
    let tr = document.createElement("tr")
    return tr
}

function crearCeldaHead(texto){
    let th = document.createElement("th")
    th.innerText = texto
    return th
}

function crearCeldaBody(texto){
    let td = document.createElement("td")
    td.innerText = texto
    return td
}

function appendCeldas(fila, celda){
    fila.appendChild(celda)
}

function appendFilaHead(contenedor, fila){
    contenedor.appendChild(fila)
}

function appendFilaBody(contenedor, fila){
    contenedor.appendChild(fila)
}

function armarTabla(data, contenedorMayor){
    let thead = crearThead()
    let tbody = crearTbody()
    let trHead = crearFilaHead()

    let thNombre = crearCeldaHead("Nombre")
    let thAbv = crearCeldaHead("ABV")
    let thIbu = crearCeldaHead("IBU")
    appendCeldas(trHead, thNombre)
    appendCeldas(trHead, thAbv)
    appendCeldas(trHead, thIbu)
    appendFilaHead(thead, trHead)

    for (let i = 0; i < data.length; i++) {
        let trBody = crearFilaBody()
        let tdNombre = crearCeldaBody(data[i].name)
        let tdAbv = crearCeldaBody(data[i].abv)
        let tdIbu = crearCeldaBody(data[i].ibu)

        appendCeldas(trBody, tdNombre)
        appendCeldas(trBody, tdAbv)
        appendCeldas(trBody, tdIbu)
        appendFilaBody(tbody, trBody)
    }


    contenedorMayor.appendChild(thead)
    contenedorMayor.appendChild(tbody)
}

armarTabla(beers, table)