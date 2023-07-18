var estudiantes = ["Maria" , "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log( `Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiante);
    //El console.log manda a llamar al array para que se pueda ver 
    //como el shift va sacando un elemento en cada ciclo 
    //hasta que la (condicion) deje de ser verdad.
    var estudiante = estudiantes.shift()
    //shift es un metodo de mutacion de array que saca elementos de un array
    //Luego, se manda a llamar a la funcion
    saludarEstudiantes(estudiante);
    //estudiante es el parametro
}
//cada vez que se cumpla la condicion va a sacar elementosdel array


//EJEMPLO ACTIVIDAD
export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) { // creamos un ciclo ya que decaunt no es =0
      estudiantes.pop(); // la funcion .pop elimina el ultimo elemento de un arreglo
    deathCount--; // este codigo sirve para disminuir -1 al deathcount hasta que este en 0 y se cumpla la condicion de arriba(linea 2)
  }
  estudiantes.push(nuevo); // una vez deathcount es 0 el ciclo while termina , una vez deathcount es = 0 , se ejecuta este codigo , la funcion .push agrega un nuevo elemento al arreglo
  return estudiantes; // se retorna el arreglo
  }