function getTipoSeguro(){
    var tipoSeguro = document.getElementById("tipo_seguro").value;
    const precios = document.getElementById("precios");
    var precio =1234;
    switch (tipoSeguro) {
        case "Basico":
            precio = 500
            break;
        case "Intermedio":
            precio = 1500
            break;
        case "Premium":
            precio = 2000
            break;        
    
        default:
            break;
    }
    precios.innerHTML = `<h2> El precio del Seguro seleccionado es: $${precio} </h2>`;
}

var cliente = {
    nombre : "",
    apellido : "",
    email : "",
    telefono: 1,
    tipoSeguros: ""
};

function logSubmit(event) {
    cliente.nombre = document.getElementById("nombre").value;
    cliente.apellido = document.getElementById("apellido").value;
    cliente.email = document.getElementById("email").value;
    cliente.telefono = document.getElementById("telefono").value;
    cliente.tipoSeguros = document.getElementById("tipo_seguro").value;
    log.textContent = `Muchas gracias ${cliente.nombre} por cargar correctamente sus datos`;
    console.log(cliente);
    event.preventDefault();
  }
  
  const form = document.getElementById("formulario");
  const log = document.getElementById("datos");
  form.addEventListener("submit", logSubmit);