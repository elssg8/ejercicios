// JavaScript
document.getElementById('btn__calcular').addEventListener('click', function(event) {
    event.preventDefault();

    const day = document.querySelector('.input__day').value;
    const month = document.querySelector('.input__month').value;
    const year = document.querySelector('.input__year').value;

    if (!day || !month || !year) {
        alert('Por favor, introduce todos los datos.');
        return;
    }

    if(day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        alert('Por favor, introduce una fecha válida.');
        return;
    }

    const birthDate = new Date(year, month - 1, day);// month - 1 because months are 0-indexed
    const today = new Date();

    if (birthDate > today) {
        alert('La fecha de nacimiento no puede ser en el futuro.');
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
});