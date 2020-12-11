$(document).ready(function () {
    $('#telefone').mask('(00) 0000-0000#');
});

function coletarDados() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let descricao = document.getElementById("descricao").value;

    if (verificar(nome) && verificar(email) && verificar(telefone) && verificar(descricao)) {
        enviarEmail(nome, email, telefone, descricao);
    } else {
        alert("Por favor, insira todos os dados corretamente")
    }
}

function verificar(campo) {
    if (typeof campo === undefined || campo === " " || campo === "" || campo === "(") { return false; }
    else { return true };
}

function enviarEmail(nome, email, telefone, descricao) {
    Email.send({
        Host: "smtp.gmail.com", // servidor de correio
        Username: "", // e-mail (sender), na apresentação foi utilizado gmail pessoal
        Password: "", // senha, utilizado app senha na apresentação
        To: '', // para qual e-mail
        From: "", // Quem enviará e-mail
        Subject: `${nome} te enviou um pedido de projeto`,
        Body: `Nome: ${nome} <br/><br/> Telefone: ${telefone} <br/><br/> E-mail: ${email} <br/><br/> Descrição: ${descricao}`
    }).then(
        message => alert("Email enviado com sucesso")
    );
}