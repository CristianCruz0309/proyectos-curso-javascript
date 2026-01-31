let array = [1.7, 3, 2.5, 4.8, 3.6];

function listarNotas() {
    let lista = document.getElementById("listaNotas");
    lista.innerHTML = ""; // limpia la lista

    for (let nota of array) {
        let item = document.createElement("li");
        item.innerText = nota;

        if (nota < 3.0) {
            item.classList.add("nota-mala");
        } else {
            item.classList.add("nota-buena");
        }

        lista.appendChild(item);
    }
}

function calcularPromedio() {
    let suma = 0;

    for (i=0; i < 5; i++) {
        suma += array[i];
    }

    let promedio = (suma / 5);
    document.getElementById("promedio").textContent = promedio
}

function notaMasAlta() {
    let notaAlta = 0;
    let i = 0;
    while (i < 5) {
        if (array[i] > notaAlta) {
            notaAlta = array[i]
        }
        i++;
    }
    document.getElementById("nota").textContent = notaAlta
}

function hayAplazo() {
    let aplazo = "No";
    let i = 0;

    do {
        if (array[i] < 3) {
            aplazo = "Sí";
            break;
        }
        i++;
    } while (i < 5);
    document.getElementById("aplazo").textContent = aplazo;
}