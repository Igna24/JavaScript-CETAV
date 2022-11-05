// ejercicio 1
function parOdivisible(numero) {
  if (numero % 3 == 0) {
    return "El numero es divisible por tres"
  }
  if (numero % 5 == 0) {
    return "El numero es divisible por cinco"
  }
  if (numero % 2 == 0) {
    return "El numero es par"
  } else {
    return "El numero es impar"
  }
}
console.log(parOdivisible(22))


// ejercicio 2
function sumarna(sumarN){
  suma = sumarN*(sumarN + 1)/2
  return suma
}
console.log(sumarna(5))

//ejercicio 3
function invertido (word){
  let palabraInvertido = word.split('').reverse('').join('')
  while (word <= 0){
    word = word + palabraInvertido
    word--
  }
  return palabraInvertido
}
console.log(invertido("hola"))

//ejercicio 4
function vocales(texto) {
  
  texto = texto.replace(/[aeou]/gi,'i')
  return texto
}
console.log(vocales("rodrigo"))


//ejercicio 5
let palabra = "marin";

function ordeAlfabetico(palabra){

  let palabraArray = palabra.split("");
  palabraArray.sort();
  let cadenaOrdenada = palabraArray.join("")

  return cadenaOrdenada;
}

let ordenadaAlfab = ordeAlfabetico(palabra)
console.log(ordenadaAlfab)



