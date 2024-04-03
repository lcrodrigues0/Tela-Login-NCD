document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' && password === '') {
        alert('Por favor insira o email e a senha.');
        return;
    } else if (email === '') {
        alert('Por favor insira seu email.');
        return;

    } else if (password === '') {
        alert('Por favor insira sua senha.');
        return;
    }

    if (email === 'email@example.com' && password === 'pass') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Senha ou email inválidos.');
    }
});

var btnBack = document.querySelector("#btnBack");

btnBack.onclick = function() {
    alert('Você está prestes a sair da área de login.');
};

var esqueceuSenha = document.querySelector("#esqueceuSenha");

esqueceuSenha.onclick = function() {
    alert('Você será encaminhado para recuperação de senha.');
};
