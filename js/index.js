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
