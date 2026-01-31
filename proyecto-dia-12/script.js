// VARIABLES
let selector = document.getElementById("miSelector");
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado");

let archivo = 'peliculas.json';

// ESCUCHADORES DE EVENTOS
selector.addEventListener("change", cambiarArchivo);
selector.addEventListener("cambioModo", mensajeModo);
input.addEventListener("input", verificarInput);
boton.addEventListener("click", buscar);

// FUNCIONES
function cambiarArchivo() {
    archivo = selector.value;

    lista.innerHTML = "<li style='color:gray;font-style:italic'>Escribe algo para buscar</li>";

    input.value = "";

    let evento = new CustomEvent("cambioModo");
    selector.dispatchEvent(evento);
}

function mensajeModo() {
    alert("El archivo de busqueda ahora es " + selector.value);
}

function verificarInput() {
    input.value = input.value.replace(/[^a-zA-Z ]/g, "");
}

function buscar() {
    lista.innerHTML = "";

    if (input.value.trim() === "") {
        lista.innerHTML = "<li style='color:gray;font-style:italic'>Escribe algo para buscar</li>";
        return;
    }

    fetch(archivo)
    .then(res => res.json())
    .then(data => {

        let encontrados = 0;

        for (let item of data.data) {
            console.log(item);

            if (item.nombre.includes(input.value.toUpperCase())) {

                encontrados++;

                let li = document.createElement("li");
                li.textContent = item.nombre;

                let p = document.createElement("p");
                p.textContent = item.sinopsis;

                let img = document.createElement("img");
                img.src = item.imagen;
                img.alt = item.nombre;
                img.style.width = "200px";
                img.style.marginTop = "10px";
                img.style.borderRadius = "8px";

                li.appendChild(p);
                li.appendChild(img);
                lista.appendChild(li);
            }
        }

        if (encontrados === 0) {
            lista.innerHTML = "<li style='color:gray;font-style:italic'>No se encontraron resultados</li>";
        }
    });
}
