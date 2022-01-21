
//JavaScript:



//Insertando variables desde HTML

var texto = document.getElementById("texto");
var botonE = document.getElementById("botonE");
botonE.addEventListener("click", clickE);
var textofinal = document.getElementById("textofinal");
var botonD = document.getElementById("botonD");
botonD.addEventListener("click", clickD);
var botonC = document.getElementById("botonC");
botonC.addEventListener("click", clickC);
var botonP = document.getElementById("botonP");
botonP.addEventListener("click", clickP);
var botonL = document.getElementById("botonL");
botonL.addEventListener("click", clickL);
var botonL2 = document.getElementById("botonL2");
botonL2.addEventListener("click", clickL2);
texto.focus();

var character = document.getElementById("texto").value;
const regex = /[^a-z !]+/

//Funciones:




//Función Encriptar



function clickE() {

//Validadores de carácteres especiales y mayúsculas

if (texto.value.match(regex)) 
{alert ("No utilizar números, mayúsculas ni carácteres especiales")}


else 

//Ejecución de la codificación

{
var cadena =document.getElementById("texto").value;
cadena=cadena.replaceAll("e", "enter");
cadena=cadena.replaceAll("i", "imes");
cadena=cadena.replaceAll("o", "ober");
cadena=cadena.replaceAll("a", "ai");
cadena=cadena.replaceAll("u", "ufat");
textofinal.value=cadena 
}

}







//Función Desencriptar



function clickD() {

//Validadores de carácteres especiales y mayúsculas

if (texto.value.match(regex)) 
{alert ("No utilizar números, mayúsculas ni carácteres especiales")}

else 

//Ejecución de la decodificación

{
var cadena =document.getElementById("texto").value;
cadena=cadena.replaceAll("enter", "e");
cadena=cadena.replaceAll("imes", "i");
cadena=cadena.replaceAll("ober", "o");
cadena=cadena.replaceAll("ufat", "u");
cadena=cadena.replaceAll("ai", "a");
textofinal.value=cadena
}

}


//Función Copiar

function clickC() {

	var content = document.getElementById('textofinal');
    content.select();
    document.execCommand('copy');
	alert("¡Copiado!");

}


//Función Pegar

function clickP() {

	navigator.clipboard.readText()
	.then (txt => {

			document.getElementById("texto").value = txt;

		});
}



function clickL() {

	
			document.getElementById("texto").value = " ";

}




function clickL2() {

	
			document.getElementById("textofinal").value = " ";

}

