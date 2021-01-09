var nombreMatriz = ['Lea', 'Jhon', 'Lucas', 'Maria'];

function devolverNombre(nombre) {
  for (let i = 0; i < nombreMatriz.length; i++) {
    if (nombre === nombreMatriz[i]){
      return nombreMatriz[i];
    }else 
      return false;  
  }
}

console.log(devolverNombre('Lea'));
console.log(devolverNombre('Jhon'));
console.log(devolverNombre('jhon'));
console.log(devolverNombre('Tostada'));