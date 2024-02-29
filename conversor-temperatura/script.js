function convertirAFahrenheit() {
    let temp = document.getElementById('temp').value;
    let resultado = document.getElementById('CtoF');
    let fahrenheit = temp * 9/5 + 32;

    resultado.innerHTML = 'Resultado temp °C a °F: ' + fahrenheit + " °F";
    document.getElementById('FtoC').innerHTML = 'Resultado temp °F a °C: ';
    cambiarColorYMensaje(fahrenheit);
}

function convertirACelsius() {
    let temp = document.getElementById('temp').value;
    let celsius = (temp - 32) * 5/9;
    let body = document.getElementById('body');
    let resultado = document.getElementById('FtoC');


    resultado.innerHTML = 'Resultado temp °F a °C: ' + celsius + " °C";
    document.getElementById('CtoF').innerHTML = 'Resultado temp °C a °F: ';
    document.getElementById('frase').innerHTML = "";
    body.style.backgroundColor = "white";
}

function cambiarColorYMensaje(temp) {
    let body = document.getElementById('body');
    let frase = document.getElementById('frase');

    if(temp >= 14 && temp <= 32) {
        body.style.backgroundColor = "blue";
        body.style.color = "white";
        frase.innerHTML = "Temperatura baja";
    } else if(temp > 32 && temp <= 68) {
        body.style.backgroundColor = "green";
        body.style.color = "white";
        frase.innerHTML = "Temperatura media";
    } else if(temp > 68 && temp <= 96) {
        body.style.backgroundColor = "red";
        body.style.color = "black";
        frase.innerHTML = "Temperatura alta";
    } else {
        body.style.backgroundColor = "white";
        frase.innerHTML = "";
        body.style.color = "black";
    }
}