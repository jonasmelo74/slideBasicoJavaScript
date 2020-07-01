
let intervalo = 3000

function slide1() {
    document.getElementById("Foto").src="imagem1.jpg"
    setTimeout("slide2()",intervalo)
}

function slide2(){
    document.getElementById("Foto").src="imagem2.jpg" 
    setTimeout("slide3()",intervalo)
}

function slide3(){
    document.getElementById("Foto").src="imagem3.jpg"
    setTimeout("slide1()",intervalo)
}

