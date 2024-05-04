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