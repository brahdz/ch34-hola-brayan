function cambiarNombre() {
    
    var nuevoNombre = prompt("¿Cuál es tu nombre?");
    
    if (nuevoNombre !== null && nuevoNombre !== "") {
        document.getElementById("saludo").innerText = "Hola " + nuevoNombre;
    } else {
    alert("Debes ingresar un nombre válido");
    }
  }