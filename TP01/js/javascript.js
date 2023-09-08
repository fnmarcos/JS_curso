
// 

// TP 01 MARCOS NICOLAS FERNANDEZ

// 

// 1.Suma de elementos en un arreglo:
// Escribe una función que use reduce() para sumar todos los elementos de un arreglo de
// números.


// let numeros = [1, 2, 3, 6, 7];

// function sumar(array) {

//     let suma = array.reduce((sum_acumulativa, currentValue) => sum_acumulativa + currentValue, 0);

//     return suma
// }

// console.log("La suma da como resultado : " + sumar(numeros));



// 2.Multiplicación de elementos en un arreglo:
// Crea una función que utilice reduce() para multiplicar todos los elementos de un arreglo de
// números.

// let numeros = [15, 2, 3, 4, 5];

// function multiplicar(array) {

//     let multiplicacion = array.reduce((mul_acumulativa, currentValue) => mul_acumulativa * currentValue, 1);

//     return multiplicacion;

// }

// console.log("La multiplicacion da como resultado : " + multiplicar(numeros));


// 3.Concatenación de cadenas:
// Implementa una función que use reduce() para concatenar todos los elementos de un
// arreglo de cadenas en una sola cadena.

// let array = ['A', 'R', 'R', 'A', 'Y'];

// function concatenar(arr) {

//     let concatena = arr.reduce((acumulativo, currentValue) => acumulativo + currentValue);

//     return concatena;

// }

// console.log("La concatenacion da como resultado : " + concatenar(array));


// 4.Calcular el promedio:
// Escribe una función que use reduce() para calcular el promedio de un arreglo de números.

// let numeros = [1, 2, 3, 4, 5];

// function concatenar(array) {

//     let suma = array.reduce((sum_acumulativa, currentValue) => sum_acumulativa + currentValue, 0);

//     let promedio = suma / (numeros.length)

//     return promedio;

// }

// console.log("El promedio da como resultado : " + concatenar(numeros));



// 5.Encontrar el valor máximo:
// Crea una función que utilice reduce() para encontrar el valor máximo en un arreglo de
// números.


// let numeros = [15, 2, 3, 44, 5];

// function valorMaximo(array) {

//     let maximo = array.reduce((firstValue, currentValue) => Math.max(firstValue, currentValue));

//     return maximo
// }

// console.log("El valor máximo es " + valorMaximo(numeros));

// 6.Contar ocurrencias:
// Escribe una función que cuente cuántas veces aparece un elemento específico en un
// arreglo utilizando reduce().

// let numeros = [4, 4, 3, 4, 4];
// let elemento = 4

// function contarRepeticion(array, element) {

//     let repeticion = array.reduce((total, currentValue) => { if (currentValue == element) { return total + 1 } else return total }, 0);

//     return repeticion

// }

// console.log("El elemento aparece " + contarRepeticion(numeros, elemento) + " veces");


// 7. Ordenar palabras por longitud:
// Crea una función que ordene un arreglo de palabras por su longitud, es decir, la cantidad de
// caracteres.
// EJEMPLO :
// [CASA, OSO, PELOTA] el resultado debería ser [oso, casa, pelota]


// let palabras = ["manzana", "banana", "uva", "kiwiiiit", "fresaaa"];

// function ordenar(array) {

//     var var_aux;
//     let longitud = array.length;

//     for (let i = 0; i < longitud; i++) {

//         for (let j = i + 1; j < longitud; j++) {

//             if (array[i].length > array[j].length) {

//                 var_aux = array[i].toLocaleUpperCase();
//                 array[i] = array[j].toLocaleUpperCase();
//                 array[j] = var_aux.toLocaleUpperCase();
//             }
//             else {

//                 array[j] = array[j].toLocaleUpperCase();
//             }

//         }

//     }

//     return array

// }

// console.log(ordenar(palabras))

// 8. Búsqueda de un elemento en un arreglo:
// Escribe una función que busque un elemento específico en un arreglo y devuelva true si se
// encuentra o false si no se encuentra.

// let numeros = [15, 4, 5, 5, 4];
// let busqueda = 9;

// function buscarElemento(array, elemento) {

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] == elemento) {
//             return true;
//         }
//     }

//     return false;

// }

// console.log(buscarElemento(numeros, busqueda))


// 9. Búsqueda de la primera coincidencia:
// Implementa una función que busque la primera instancia de un elemento en un arreglo y
// devuelva su índice. Si el elemento no está en el arreglo, devuelve -1.

// let numeros = [15, 5, 5, 5, 4];
// let busqueda = 4;

// function buscarElemento(array, elemento) {

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] == elemento) {
//             return i;
//         }
//     }

//     return -1;

// }

// console.log(buscarElemento(numeros,busqueda))


// 10. Búsqueda de la última coincidencia:
// Crea una función que busque la última instancia de un elemento en un arreglo y devuelva
// su índice. Si el elemento no está en el arreglo, devuelve -1.


// let numeros = [15, 5, 5, 5, 5];
// let busqueda = 5;

// function buscarElemento(array, elemento) {

//     var aux = -1;

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] == elemento) {
//             aux = i;
//         }
//     }

//     return aux;

// }

// console.log(buscarElemento(numeros, busqueda))
