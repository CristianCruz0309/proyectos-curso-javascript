function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil('Ford', 'Focus', 'Rojo', 2020, 'Matías Perez');
let automovil2 = new Automovil('Chevrolet', 'Camaro', 'Amarillo', 2022, 'Silvina Marquez');
let automovil3 = new Automovil('Toyota', 'Corolla', 'Blanco', 2025, 'Carlos García');
let automoviles = [automovil1, automovil2, automovil3];

Automovil.prototype.venderAutomovil = function(nuevoTitular) {
this.titular = nuevoTitular;
}

Automovil.prototype.encender = function() {
alert(`El ${this.marca} ${this.modelo} fue encendido`);
}

Automovil.prototype.verAutomovil = function() {
return `${this.marca} ${this.modelo} (${this.anio}) - Titular: ${this.titular}`;
}

function mostrarAutomoviles() {
    let lista = document.getElementById("listaAutomoviles");

    // Limpiar lista antes de volver a mostrar
    lista.innerHTML = "";

    for (let automovil of automoviles) {
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}