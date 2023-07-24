//Eventos
//Evento on click
function eventoClick(){
    alert('JavaScript é muito legal !!');
}
//duplo click
function clickDuplo(){ 
    document.body.style.backgroundColor = "yellow";
}
//*onmouseover
function viraAzul(){
    //a variável div receberá o elemento "bloco", que é a div do html.
    let div = document.getElementById("bloco");
    //Quando a função for chamada, no caso, quando o mouse passar em cima do bloco da pagína em questão...
    div.style.backgroundColor="blue";
}
//onmouseout
function viraVerde(){
    let div = document.getElementById("bloco");
    div.style.backgroundColor="green";
}
//onmousemove
function moveuMouse(){
    let paragrafo = document.getElementById("texto");
    paragrafo.append('Moveu o mouse. Deixe o mouse quieto!');
}
//onmousedown
function apertaVermelho(){
    document.body.style.backgroundColor = "palevioletred";
}
//onmouseup 
function soltaBranco(){
    document.body.style.backgroundColor = "white"
}
//onfocus
function restauraPagina(){
    //limpa a caixa de texto para poder digitar
    document.getElementById("campoTexto").value=" ";
    document.getElementById("texto").innerHTML=" ";
    document.getElementById("texto2").innerHTML=" DIGITE O QUE VOCÊ QUISER ";
    document.body.style.backgroundColor = "orange";

}
//onchange
//DropDown com 4 opções de cores
function mudaCor(){
    let elementoSelect = document.getElementById("cores");
    let corSelecionada = elementoSelect.value;

    switch(corSelecionada){
        case "1":
            document.body.style.backgroundColor = "green";
        break;
        case "2":
        document.body.style.backgroundColor = "purple";
        break;
        case "3":
        document.body.style.backgroundColor = "blue";
        break;
        case "4":
        document.body.style.backgroundColor = "red";
        break;
        default:
        document.body.style.backgroundColor = "white";
        break;
        }
}

//onblur
function foraCaixaTexto(){
    document.getElementById("texto2").innerHTML=" VOCÊ CLICOU FORA DA CAIXA DE TEXTO ";
    document.body.style.backgroundColor = "aquamarine";
}