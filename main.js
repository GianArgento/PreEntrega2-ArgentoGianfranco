// Funcion constructora

const Producto = function(nombre,precio,modelo,stock){
    this.nombre=nombre
    this.precio=precio
    this.modelo=modelo
    this.stock=stock
}

// Clasificacion de autos en stock disponibles

let auto1 = new Producto("volkswagen virtus", 9000000, 2022, 4)
let auto2 = new Producto("volkswagen taos", 12000000, 2023, 5)
let auto3 = new Producto("fiat cronos", 6500000, 2021, 4)
let auto4 = new Producto("chevrolet cruze", 10500000, 2023, 2)
let auto5 = new Producto("chevrolet onix", 6856000, 2020, 3)
let auto6 = new Producto("chevrolet camaro", 14500000, 2017, 1)
let auto7 = new Producto("mercedes benz amg", 35555000, 2019, 1)
let auto8 = new Producto("ford falcon sprint", 4500000, 1980, 1)


let lista = [auto1,auto2,auto3,auto4,auto5,auto6,auto7,auto8]


// Funcion para filtrar y buscar

function filtrarProductos(){

    let palabraClave = prompt("ingresa el nombre del auto que desea comprar").trim().toLowerCase()
    let resultado = lista.filter((producto)=> producto.nombre.toLowerCase().includes(palabraClave))

    if (resultado.length > 0 ){
        console.table(resultado)
    }else{
        alert("Disculpe, no se encontro ninguna coincidencia con: " + palabraClave)
    }
}


filtrarProductos()