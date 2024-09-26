// 1. Función que recibe un array de números y retorna la suma de todos los números del array
function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
console.log(sumarArray([1, 2, 3, 4, 5])); // 15

// 2. Función que recibe un array de números y retorna el promedio de todos los números del array
function promedioArray(numeros) {
    let suma = sumarArray(numeros); // Reutilizamos la función de sumar
    return suma / numeros.length;
}
console.log(promedioArray([1, 2, 3, 4, 5])); // 3

// 3. Función que toma un arreglo de strings y devuelve un nuevo arreglo con los strings en mayúsculas
function convertirArregloMayusculas(strings) {
    let resultado = [];
    for (let i = 0; i < strings.length; i++) {
        resultado.push(strings[i].toUpperCase());
    }
    return resultado;
}
console.log(convertirArregloMayusculas(["hola", "mundo", "javascript"])); // ["HOLA", "MUNDO", "JAVASCRIPT"]

// 4. Función que toma un arreglo de números y devuelve un nuevo arreglo con solo los números pares
function filtrarPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
