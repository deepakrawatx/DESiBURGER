function validate() {

	var name,email,pwd;
	name=document.getElementById('name');
	email=document.getElementById('email');
	pwd=document.getElementById('password');

	if (name==" "||email==" "||pwd==" ") {
		alert("Please Enter Some Values")
	}
	else if(pwd.length<8){
	alert("password must be greate then 8")		
	}
	else{
		alert("Success")
	}
}