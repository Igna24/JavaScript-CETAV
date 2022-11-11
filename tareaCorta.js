const numerosDados = [];
function validarDatos() {
  while (true) {
    let validacion = prompt('porfavor ingrese un numero')
    if (validacion === "") {
      alert('es string vacio');
      break;
    } else {
      alert('es un numero');
      numerosDados.push(parseInt(validacion));
    }
  }
}
validarDatos()

let numeroMayor = numerosDados[0];
function mayor() {
  for (let i = 0; i < numerosDados.length; i++) {
    if (numerosDados[i] > numeroMayor) {
      numeroMayor = numerosDados[i];
    }
  }
  return numeroMayor
}
console.log('El numero mayor es', mayor());

let numeroMenor = numerosDados[0];
function menor() {
  for (let i = 0; i < numerosDados.length; i++) {
    if (numerosDados[i] < numeroMenor) {
      numeroMenor = numerosDados[i];
    }
  }
  return numeroMenor
}
console.log('El numero menor es', menor());


function promedio() { //funcion de promedio
  var sumaArreglo = 0

  for (i = 0; i < numerosDados.length; i++) {
    sumaArreglo += numerosDados[i];
  }
  const resultado = sumaArreglo / numerosDados.length;
  return resultado;
}
console.log("el promedio es", promedio())

let mediana = 0
let mitad = Math.floor((numerosDados.length) / 2)
if (numerosDados.length % 2 == 0) {
  mediana = (numerosDados[mitad - 1] + numerosDados[mitad]) / 2;
  console.log("mediana1 par", mediana)
} else {
  mediana = numerosDados[Math.floor(mitad)];
  console.log("mediana1 impar", mediana)
}

