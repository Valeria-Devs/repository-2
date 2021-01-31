const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}


alert("¿Que operacion deseas realizar?");
let option = prompt("1 : suma , 2: resta, 3 : division, 4: multiplicacion");
if (option > 4) {
    alert("Opcion no valida ingresa el numero correcto");

} else if (option == 1) {
    let num1 = prompt("Ingresa primer numero para sumar");
    let num2 = prompt("Ingresa segundo numero para sumar");
    resultado = sumar(num1, num2);
    alert(resultado);
} else if (option == 2) {
    let num1 = prompt("Ingresa primer numero para restar");
    let num2 = prompt("Ingresa segundo numero para restar");
    resultado = restar(num1, num2);
    alert(resultado);
} else if (option == 3) {
    let num1 = prompt("Ingresa primer numero para dividir");
    let num2 = prompt("Ingresa segundo numero para dividir");
    resultado = dividir(num1, num2);
    alert(resultado);
} else if (option == 4) {
    let num1 = prompt("Ingresa primer numero para multiplicar");
    let num2 = prompt("Ingresa segundo numero para multiplicar");
    resultado = multiplicar(num1, num2);
    alert(resultado);
}