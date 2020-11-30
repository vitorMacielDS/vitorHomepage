function mens(){
	var usuario = prompt("digite seu nome");
	alert("bom dia"+ usuario)
	document.getElementById("nome").innerHTML = usuario;

}
function validacao(){
	var mens = "";
	if (document.getElementById("num").validity.rangeOverflow) {
		mens = "numero maior"
	}
	else {
		mens= "OK"
	}
	document.getElementById("imprimi").innerHTML = mens;	
}
function limpa(){
	if (document.getElementById("num").value !="") 
	{
		document.getElementById("num").value ="";

	}

}