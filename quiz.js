/*Escriba un programa que convierta un número dado a horas y minutos. Ej 220 = 3 horas y 40 minutes*/

function convertirTiempo(minutos){
  let horas = Math.floor(minutos / 60)
   minutos = minutos % 60
   
   console.log( "las horas son",horas, "y los minutos son", minutos)
 }
 convertirTiempo(220)
 