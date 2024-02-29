/* function sumar() {
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
} */



// Obtén todos los botones y el display
let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');

display.value = '';

// Variable para almacenar la operación actual
let operation = '';
let operand1 = '';
let operand2 = '';
let clearNext = false;
let hasOperation = false;

/* desactivar los botones /, *, -, +, c, = al inicio, y activarlos hasta que se ingrese un digito */
const ids = ['div', 'mult', 'subst', 'sum', 'clear', 'equals'];
const hasSign = ['div', 'mult', 'subst', 'sum'];
botonesDesactivados = () => {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.disabled = true;
        }
    });
}

botonesActivados = () => {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.disabled = false;
        }
    });
}


botonesDesactivados();
// Agrega un detector de eventos a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');
        
        if (value === 'c') {
            // Si el botón es 'c', limpia el display y las variables
            botonesDesactivados();
            display.value = '';
            operation = '';
            operand1 = '';
            operand2 = '';
        } else if (['/', '*', '-', '+'].includes(value)) { // esto hace que 
            // Si el botón es una operación, almacénala 
            operation = value;
            display.value += ' ' + value + ' ';
            hasOperation = true;
        } else if (value === '=') {
            // Si el botón es '=', realiza la operación
            hasOperation = false;
            switch (operation) {
                case '/':
                    display.value = parseFloat(operand1) / parseFloat(operand2);
                    break;
                case '*':
                    display.value = parseFloat(operand1) * parseFloat(operand2);
                    break;
                case '-':
                    display.value = parseFloat(operand1) - parseFloat(operand2);
                    break;
                case '+':
                    display.value = parseFloat(operand1) + parseFloat(operand2);
                    break;
            }
            operation = '';
            operand1 = display.value;
            operand2 = '';
            //clearNext = true;
        } else {
            botonesActivados();
            // Si el botón es un número o un punto, añádelo al display
            if (clearNext) {
                display.value = '';
                clearNext = false;
            }

            if (!hasOperation) {
                operand1 += value;
                console.log('Operand1' + operand1);
            }
            else{
                operand2 += value;
                console.log('Operand2' + operand2);
            }
            display.value += value;
        }
    });
});


