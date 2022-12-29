/**
 * Función que nos inserta en número entero en un array, si no lo tiene, y nos devuelve el array resultante
 * @param {Array} array Es el array de enteros en donde vamos a insertar los valores
 * @param {Number} valor Entero que queremos insertar
 * @returns Devuelve el array debidamente modificado o -1 si el valor introducido no es un número, y -2 si no es entero
 */
function insertarValor(array, valor) {
  let resultado;
  let insertado;
  if (!Number.isNaN(valor)) {
    if (Number.isInteger(valor)) {
      for (let contador = 0; contador < array.length; contador++) {
        insertado = false;
        if (array[contador] >= valor) {
          if (array[contador] != valor) {
            array.push(valor);
          } else if (array(contador) == valor) {
          }
          insertado = true;
          break;
        }
      }
      if (!insertado) {
        array.push(valor);
      }
      array.sort(function (a, b) {
        return a - b;
      });
      resultado = array;
    } else {
      resultado = -2;
    }
  } else {
    resultado = -1;
  }
  return resultado;
}
/**
 *
 * @param {Number} cantidad Valor entero positivo que indica el número de valores aleatorios buscados
 * @param {Number} inicio Valor entero mayor o igual a cero que indica el valor mínimo de los números aleatorios
 * @param {Number} fin Valor entero mayor que el valor mínimo que indica el valor máximo de números aleatorios
 * @returns Devuelve un array con los números aleatorios no repetidos, -1 si <code>cantidad</code> no es un valor número,
 *  -2 si <code>inicio</code> no es un valor numérico,
 * -3 si <code>fin</code> no es un valor numérico,
 * -4 si <code>cantidad</code> no es un número entero,
 * -5 si <code>inicio</code> no es un número entero,
 * -6 si <code>fin</code> no es un número entero,
 * -7 si <code>cantidad</code> no es mayor o igual que 1,
 * -8 si <code>inicio</code> no es mayor o igual que 0 y
 * -9 si <code>fin</code> no es mayor o igual que <code>inicio+cantidad</code>
 */
function crearMatrizAleatoria(cantidad, inicio, fin) {
  let resultado;
  if (!isNaN(cantidad)) {
    if (!isNaN(inicio)) {
      if (!isNaN(fin)) {
        if (Number.isInteger(cantidad)) {
          if (Number.isInteger(inicio)) {
            if (Number.isInteger(fin)) {
              cantidad = Number(cantidad);
              inicio = Number(inicio);
              fin = Number(fin);
              if (cantidad >= 1) {
                if (inicio >= 0) {
                  if (fin >= inicio + cantidad) {
                    let contador = 0;
                    let numerosAleatorios = [];
                    while (numerosAleatorios.length != cantidad) {
                      let numero = Math.round(Math.random() * (fin - inicio) + inicio);
                      numerosAleatorios = insertarValor(numerosAleatorios, numero);
                    }
                    resultado = numerosAleatorios;
                  } else {
                    // El valor devuelto es -9 si fin no es mayor o igual que inicio+cantidad
                    resultado = -9;
                  }
                } else {
                  // El valor devuelto es -8 si inicio no es mayor o igual que cero
                  resultado = -8;
                }
              } else {
                // El valor devuelto es -7 si cantidad no es mayor o igual que 1
                resultado = -7;
              }
            } else {
              // El valor devuelto es -6 si fin no es un número entero
              resultado = -6;
            }
          } else {
            // El valor devuelto es -5 si inicio no es un número entero
            resultado = -5;
          }
        } else {
          // El valor devuelto es -4 si cantidad no es un número entero
          resultado = -4;
        }
      } else {
        // El valor devuelto es -3 si fin no es un número
        resultado = -3;
      }
    } else {
      // El valor devuelto es -2 si inicio no es un número
      resultado = -2;
    }
  } else {
    // El valor devuelto es -1 si cantidad no es un número
    resultado = -1;
  }
  return resultado;
}
let resultado; // Donde se almacenará el mensaje que luego saldrá en una ventana emergente
// Se muestra menú principal en una ventana emergente
let seleccionar = window.prompt("Seleccione:\n1.- Euromillón\n2.- Primitiva\n3.- Bonoloto\n4.- El Gordo");
// Convertimos las selección a entero. Si no fuese capaz devolverá undefined
seleccionar = parseInt(Number(seleccionar));
let numeros = []; // Array en donde se almacenarán los números
let reintegro = []; // Array en donde se almacenarán los reintegros
let estrellas = []; // Array en donde se almacenarán las estrellas
switch (seleccionar) {
  case 1:
    resultado = "La combinación del juego del Euromillón es:\nNúmeros: ";
    numeros = crearMatrizAleatoria(5, 1, 50);
    estrellas = crearMatrizAleatoria(2, 1, 12);
    numeros.forEach((elemento) => {
      resultado += elemento + " ";
    });
    resultado += "\nEstrellas: ";
    estrellas.forEach((elemento) => {
      resultado += elemento + " ";
    });
    break;
  case 2:
    resultado = "La combinación del juego de la Primitiva es:\nNúmeros: ";
    numeros = crearMatrizAleatoria(6, 1, 49);
    reintegro = crearMatrizAleatoria(1, 0, 9);
    numeros.forEach((elemento) => {
      resultado += elemento + " ";
    });
    resultado += "\nReintegro: ";
    reintegro.forEach((elemento) => {
      resultado += elemento;
    });
    break;
  case 3:
    resultado = "La combinación del juego de La Bonoloto es:\nNúmeros: ";
    numeros = crearMatrizAleatoria(6, 1, 49);
    numeros.forEach((elemento) => {
      resultado += elemento + " ";
    });
    break;
  case 4:
    resultado = "La combinación del juego de El Gordo es:\nNúmeros: ";
    numeros = crearMatrizAleatoria(5, 1, 54);
    reintegro = crearMatrizAleatoria(1, 0, 9);
    numeros.forEach((elemento) => {
      resultado += elemento + " ";
    });
    resultado += "\nReintegro: ";
    reintegro.forEach((elemento) => {
      resultado += elemento;
    });
    break;
  default:
    resultado = "Ha seleccionado un valor incorrecto";
}
// Se muestra el resultado en pantalla
alert(resultado);
