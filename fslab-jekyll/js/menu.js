let status = false;
let menu = document.getElementById("menu");

function abrirMenu(){
    status = !status;

    alterarEstado();
}

function alterarEstado() {
    if (!status) menu.style.display = 'none';
    else menu.style.display = 'block';
}