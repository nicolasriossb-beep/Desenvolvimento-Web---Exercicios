// EXERCÍCIO 1
function mostrarOcultar(){

    let texto = document.getElementById("texto");

    if(texto.style.display == "none"){

        texto.style.display = "block";

    }else{

        texto.style.display = "none";

    }

}

// EXERCÍCIO 2
function mostrarTexto(){

    let texto =
        document.getElementById("campoTexto").value;

    document.getElementById("resultadoTexto").innerHTML =
        texto;

}

function limparTexto(){

    document.getElementById("resultadoTexto").innerHTML =
        "";

}

// EXERCÍCIO 3
function verificarResposta(correta){

    if(correta){

        document.getElementById("resultadoPergunta")
            .innerHTML = "Resposta correta!";

    }else{

        document.getElementById("resultadoPergunta")
            .innerHTML = "Resposta errada!";

    }

}

// EXERCÍCIO 4
function adicionarTarefa(){

    let tarefa =
        document.getElementById("tarefa").value;

    let item = document.createElement("li");

    item.innerHTML = tarefa;

    document.getElementById("lista")
        .appendChild(item);

}

// EXERCÍCIO 5
function converterTemperatura(){

    let celsius =
        document.getElementById("celsius").value;

    let fahrenheit =
        (celsius * 9/5) + 32;

    document.getElementById("resultadoTemperatura")
        .innerHTML = fahrenheit + " °F";

}

// EXERCÍCIO 6
function apagarSemaforo(){

    document.getElementById("vermelho")
        .style.background = "gray";

    document.getElementById("amarelo")
        .style.background = "gray";

    document.getElementById("verde")
        .style.background = "gray";

}

function acender(cor){

    apagarSemaforo();

    if(cor == "red"){

        document.getElementById("vermelho")
            .style.background = "red";

    }

    if(cor == "yellow"){

        document.getElementById("amarelo")
            .style.background = "yellow";

    }

    if(cor == "green"){

        document.getElementById("verde")
            .style.background = "green";

    }

}

// EXERCÍCIO 7
function gerarTabuada(){

    let numero =
        document.getElementById("numero").value;

    let resultado = "";

    for(let i = 1; i <= 10; i++){

        resultado +=
            numero + " x " + i + " = " +
            (numero * i) + "<br>";

    }

    document.getElementById("resultadoTabuada")
        .innerHTML = resultado;
}