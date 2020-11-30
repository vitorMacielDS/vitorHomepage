function validacao() {
	var idnum1 = document.getElementById("num1");
	var idnum2 = document.getElementById("num2");
	if (idnum1 > idnum2 ) 
	{
		document.getElementById("imprimi").innerHTML= "num1 maior"
	}
	else	
	{
		document.getElementById("imprimi2").innerHTML= "num2 maior"
	}
}