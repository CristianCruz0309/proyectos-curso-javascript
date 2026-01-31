function cargarContenido() {
    // Función que cargue las cotizaciones
    cargarCotizaciones(mostrarCotizacion);

    // Funcion que cargue los elementos
    cargarElementos();

    // Función que cargue los textos
    cargarTextos();
}

async function cargarCotizaciones(callback) {

    await delay(2500);

    let promesa1 = await fetch('https://blockchain.info/ticker')
    callback(await promesa1.json());

    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').textContent =
    "EUR a USD: " + datos2.rates.EUR;

    let datos3 = await crearPedido('https://open.er-api.com/v6/latest/COP');
    document.getElementById('UsdCop').textContent =
    "COL a USD: " + datos3.rates.USD;
    document.getElementById('imgEspera').style.visibility = 'hidden';
}

function mostrarCotizacion(datos) {
    document.getElementById('btc').textContent =
        "Bitcoin a USD: " + datos.USD.last.toLocaleString();
}

async function crearPedido(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if(xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}

function cargarElementos() {
    document.getElementById('imgLogo').setAttribute('src', 'logo.png');
    document.getElementById('titulo').textContent = "Cotizaciones Online";
    document.getElementById('imgEspera').setAttribute('src', 'loading.gif');
    document.getElementById('imgEspera').style.visibility = 'visible';
}

function cargarTextos() {
    document.getElementById('UsdEur').textContent = "EUR a USD: ";
    document.getElementById('UsdCop').textContent = "COL a USD: ";
    document.getElementById('btc').textContent = "Bitcoin a USD: ";
}

function delay(ms) {
    return new Promise(function(res) {
        setTimeout(res, ms);
    })
}

setInterval(() => {
    cargarCotizaciones(mostrarCotizacion);
}, 30000);
