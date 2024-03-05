document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var address = document.getElementById('address').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });

    var isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'El nombre es requerido';
        isValid = false;
    } else if (name.length > 50) {
        document.getElementById('nameError').textContent = 'El nombre no debe exceder los 50 caracteres';
        isValid = false;
    }

    // Validate address
    if (address === '') {
        document.getElementById('addressError').textContent = 'La dirección es requerida';
        isValid = false;
    } else if (address.length > 50) {
        document.getElementById('addressError').textContent = 'La dirección no debe exceder los 50 caracteres';
        isValid = false;
    }

    // Validate phone
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'El número de teléfono es requerido';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'El número de teléfono debe tener 10 dígitos';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'El correo electrónico es requerido';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido';
        isValid = false;
    }

    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'El mensaje es requerido';
        isValid = false;
    } else if (message.length > 150) {
        document.getElementById('messageError').textContent = 'El mensaje no debe exceder los 150 caracteres';
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        var formData = {
            name: name,
            address: address,
            phone: phone,
            email: email,
            message: message
        };
        console.log(formData);
        alert('Mensaje enviado exitosamente!');
        document.getElementById('contactForm').reset();
    }
});
