function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="Isaac" && pass=="022406"){
    alert("Usuario y contraseña validos");
    window.location="Prom.html";
    
} else {
    alert("Intenta de Nuevo");
}
}