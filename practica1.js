let datosNumericos = [2, 3, 7, 4, 13, 5, 6, 7, 8, 9, 10, 10, 11].sort();
let numeroMayor = datosNumericos[0];
let array = [[1, 0, 0], [0, 1, 1], [0, 1, 0]];
let contador = 0;
let duplicado = []
let x = 5


function main(funtion) {
  function mayor() {
    for (let i = 0; i < datosNumericos.length; i++) {
      if (datosNumericos[i] > numeroMayor) {
        numeroMayor = datosNumericos[i];
      }
    }
    return numeroMayor
  }
  console.log('El numero mayor es', mayor());

  function palindromo(texto) {
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] != texto[texto.length - 1 - i]) {
        return false
      }
    }
    return true
  }
  console.log(palindromo('anitalavalatina'))

  function contadorCeros() {
    for (let i = 0; i < array.length; i++) {
      for (let x = 0; x < array[i].length; x++) {

        if (array[i][x] == 0) {
          contador++
        }
      }
    }
    return + contador
  }
  console.log('La cantidad de ceros repetidos es', contadorCeros());

  function duplicados() {
    for (let i = 0; i < datosNumericos.length; i++) {
      if (datosNumericos[i + 1] === datosNumericos[i]) {
        duplicado.push(datosNumericos[i])
      }
    } if (duplicado.length >= 1) {
      return duplicado;
    }
    else {
      return 'No se encontraron números repetidos en la lista de números recibida'
    }
  }
  console.log(duplicados([]))

  function piramede() {
    for (let i = 1; i <= x; ++i) {
      let resultado = ''
      for (let j = 1; j <= i; ++j) {
        resultado += '* '
      }
      console.log(resultado)
    }
  }
  piramede()
}

main()
