function sumar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('resultado').value = Number(num1) + Number(num2);
    document.getElementById('signo').innerHTML = "+";
}

function restar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('resultado').value = num1 - num2;
    document.getElementById('signo').innerHTML = "-";
}

function multiplicar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('resultado').value = num1 * num2;
    document.getElementById('signo').innerHTML = "*";
}

function dividir() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(num2 != 0){
        document.getElementById('resultado').value = num1 / num2;
        document.getElementById('signo').innerHTML = "/";
    } else {
        alert("No se puede dividir por cero");
    }
}