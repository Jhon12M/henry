function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero < 50 && numero > 20){
        return true;
    }else
        return false;
}

console.log(estaEnRango(1));
console.log(estaEnRango(15));
console.log(estaEnRango(35));
console.log(estaEnRango(51));
console.log(estaEnRango(45));