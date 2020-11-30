function validacao() {
	var x = document.forms["fcadastro"]["tNOme"].value;
	if (x == null || x == "") {
		alert("Vitor maciel");
		document.fcadastro.tNOme.focus();
		return false;
	}
}