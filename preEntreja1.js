/* Función para calcular el precio final después de aplicar descuentos e impuestos */

function calcularPrecioFinal(precio, porcentajeDescuento, porcentajeImpuesto) {
    // Calcular el monto del descuento
    
    let montoDescuento = (precio * porcentajeDescuento) / 100;

    // Calcular el precio después del descuento
    let precioDespuesDescuento = precio - montoDescuento;

    // Calcular el monto del impuesto
    let montoImpuesto = (precioDespuesDescuento * porcentajeImpuesto) / 100;

    // Calcular el precio final
    let precioFinal = precioDespuesDescuento + montoImpuesto;

    return precioFinal;
}

// Función para solicitar la entrada del usuario
function obtenerEntradaUsuario(nombreEntrada) {
    return parseFloat(prompt('Ingrese el ' + nombreEntrada + ':'));
}

// Programa principal
function principal() {
    let continuarBucle = true;

    while (continuarBucle) {

        // Obtener el precio original del usuario
        let precio = obtenerEntradaUsuario('precio original');

        // Obtener el porcentaje de descuento del usuario
        let porcentajeDescuento = obtenerEntradaUsuario('porcentaje de descuento');

        // Obtener el porcentaje de impuesto del usuario
        let porcentajeImpuesto = obtenerEntradaUsuario('porcentaje de impuesto');

        // Calcular el precio final
        let precioFinal = calcularPrecioFinal(precio, porcentajeDescuento, porcentajeImpuesto);

        // Mostrar el precio final por consola
        console.log('Precio final: ' + precioFinal);

        // Mostrar el precio final en una alerta
        alert('El precio final es: ' + precioFinal);

        // Preguntar al usuario si desea continuar
        let eleccionUsuario = prompt('¿Desea calcular el precio final para otro producto? (Si/No)');

        // Determinar si se debe continuar con el bucle
        switch (eleccionUsuario.toLowerCase()) {
            case 'si':
                continuarBucle = true;
                break;
            case 'no':
                continuarBucle = false;
                break;
            default:
                alert('Opción inválida. Saliendo del programa.');
                continuarBucle = false;
                break;
        }
    }
}

// Llamar a la función principal para iniciar el programa
principal();
