document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Deu tudo certo:' );
  });