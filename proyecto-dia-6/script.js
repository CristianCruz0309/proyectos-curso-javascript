let array = [];

function agregarNota() {
    let input = document.getElementById("inputNota");
    let nota = parseFloat(input.value);

    if (array.length >= 5) {
        alert("Solo se permiten máximo 5 notas");
        return;
    }

    if (isNaN(nota) || nota < 0 || nota > 5) {
        alert("Ingresa una nota válida entre 0 y 5");
        return;
    }

    // 🔴 limitar a 1 decimal
    nota = Number(nota.toFixed(1));

    array.push(nota);
    input.value = "";
    listarNotas();
}

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
