const ignacio = {
  nombre: 'Ignacio',
  edad: 23,
  sexo: 'masculino',
  pasatiempos: ['codear', 'caminar'],
  estado: 'viudo',
  hablar: function(){
    return `hola soy ${this.nombre}, y tengo ${this.edad} años`;
  },
  hacer: function(){
    return `hola estoy ${this.estado}, y me gusta ${this.pasatiempos[1]}`
  },
  borrar: function(){
    delete this.pasatiempos;
  }
}

console.log(ignacio.hablar());
console.log(ignacio.edad)
console.log(ignacio.hacer())
ignacio.borrar()
console.log(ignacio)