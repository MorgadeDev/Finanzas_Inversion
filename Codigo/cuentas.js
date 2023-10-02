document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    var usuario = document.getElementById('username').value;
    var contrasena = document.getElementById('password').value;
    var telefono = document.getElementById('telephone').value;
    var edad = document.getElementById('age').value;

    // Aquí puedes procesar los datos, por ejemplo, mostrarlos en la consola
    console.log('Usuario: ' + usuario);
    console.log('Contraseña: ' + contrasena);
    console.log('Edad: ' + edad);
    console.log('Telefono: ' + telefono);


    // Aquí puedes enviar los datos al servidor para autenticación
    // Esto generalmente se hace mediante una solicitud AJAX a un script en el servidor
    // donde se realiza la autenticación y se manejan las sesiones.

    // Por motivos de seguridad, la autenticación real debe hacerse en el lado del servidor.
});