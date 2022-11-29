function main (){
  // Ejercicio 1:
// Escriba un programa que solicite un número al usuario e imprima en la consola si el
// número es primo (solo divisible entre 1 y él mismo) o no.

function esPrimo(numero) {
  if(numero == 4){
    return 'no es primo'
  }
  for (i = 2; i < numero / 2; i++) {
    if (numero % i === 0) {
      return 'no es primo'
    }
  }
  return 'si es primo'
}
console.log(esPrimo(2))

// //ejercicio 2
//operacion cuadratica

function cuadratica1 (a,b,c){
  if(a != 0){
    return ((b)+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
  }
}
function cuadratica2(a,b,c) {
if(a != 0 ){
  return ((b)-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a)
}

}
console.log("cuadatica1",cuadratica1(2,10,1))
console.log( "cuadratica2",cuadratica2(2,10,1))


// // Ejercicio 3:
// // Escriba un programa que imprima todos los números del 1 al 100, uno por línea.

for(let i = 1;i <= 100;i++){
  console.log(i);
}

// // // // Ejercicio 4:
// // // // Modifique el programa anterior para que sólo imprima los números pares.

for(let i = 1;i <= 100;i++){
  if (i % 2 === 0){
    console.log(i)
  }
}

// // Ejercicio 5:
// // Modifique el programa del ejercicio 4 para que imprima 10 números por línea,separados por un espacio.
// //  La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20,
// // la tercera del 21 al 30 y así hasta llegar a 100.

// let primer = []
// let segunda = []
// let tercera = []
// let cuarta = []
// let quinta = []
// let sexta = []
// let septima = []
// let octava = []
// let novena = []
// let decima = []
// let undecima = []

// for (let i = 1; i <= 100; i++) {
//   if (i <= 10) {
//     primer.push(i)
//   } else if (i > 10 && i <= 20) {
//     segunda.push(i)
//   } else if (i > 20 && i <= 30) {
//     tercera.push(i)
//   } else if (i > 20 && i <= 30) {
//     cuarta.push(i)
//   } else if (i > 30 && i <= 40) {
//     quinta.push(i)
//   } else if (i > 40 && i <= 50) {
//     sexta.push(i)
//   } else if (i > 50 && i <= 60) {
//     septima.push(i)
//   } else if (i > 60 && i <= 70) {
//     octava.push(i)
//   } else if (i > 70 && i <= 80) {
//     novena.push(i)
//   } else if (i > 80 && i <= 90) {
//     decima.push(i)
//   }else if (i > 90 && i <= 100) {
//     undecima.push(i)
//   }
// }
// console.log(primer)
// console.log(segunda)
// console.log(tercera)
// console.log(cuarta)
// console.log(quinta)
// console.log(sexta)
// console.log(septima)
// console.log(octava)
// console.log(novena)
// console.log(decima)
// console.log(undecima)

function lineasPares(){
  for(let i = 1; i <= 100; i+= 10){
    let linea = " "
    for(let j = i; j < i + 10; j ++){
      linea += ` ${j}`
    }
    console.log(linea)
  }
}
lineasPares()

function lineasPares2 (){
  let contador = 0;
  let linea = " "
  for(let i = 1; i <=100; i++){
    if(contador === 10){
      console.log(linea)
      linea = " "
      contador = 0
    }else{
      linea += ` ${i}`
      contador+= 1
    }
  }
}
lineasPares2()
}
main()