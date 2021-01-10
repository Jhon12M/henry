const numeros = [1, 2, 3];

function devolverNumero(numeros){
  var suma = 1;

  for (let i = 0; i < numeros.length; i++){
    numeros[i] = numeros[i] + suma;
  }
  return numeros;
} 
        
console.log(devolverNumero(numeros));


