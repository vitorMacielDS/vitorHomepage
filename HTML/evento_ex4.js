function validacao() {
	if (document.fcadastro.tNome.value == "") {
		alert("digite seu nome");
		document.fcadastro.tNOme.focus();
		return false;
	}
	if (document.fcadastro.tSenha.value.length<8) {
		alert("senha com o minimo de 8 caracteres");
		document.fcadastro.tSenha.focus();
		return false;
	}
	if (document.fcadastro.tEmail.value =="" 
		|| 
		document.fcadastro.tEmail.value.indexOf('@')=="" 
		|| 
		document.fcadastro.tEmail.value.indexOf('.')=="") 
	{
		alert("digite um endereco de email valido");
		document.fcadastro.tEmail.focus();
		return false;
	}
}