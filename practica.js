function factorializador(numero) {
  if (numero < 0)
    return -1;
  if (numero == 0)
    return 1;
  else {
    return (numero * factorializador(numero - 1));
  }
}
console.log(factorializador(5))



function recursiva(num2){
  let resultado = num2
  if (num2 ==0 || num2 == 1)
  return 1
  for(let i = num2 - 1; i >= 1; i--){
    resultado *= i  }
    return resultado
}
console.log(recursiva(5))



function parOimpar (num3){
  if (num3 < 0){
    num3 = Math.abs(num3)
  }
  if (num3 == 0){
    return "si es par"
  }
  if (num3 == 1){
    return "no es par"
  } else {
    return parOimpar(num3-2)
  }
}
console.log(parOimpar(4))