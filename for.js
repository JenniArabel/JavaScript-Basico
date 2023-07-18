//CICLO FOR
//1° declara un arreglo que tiene 4 elementos, 4 nombres de estudiantes.
var estudiantes = ["Maria" , "Sergio", "Rosa", "Daniel"];

//2° Una funcion que realiza una tarea. La tarea es saludar a cada uno de los estudiantes.
function saludarEstudiantes (estudiante){
    console.log( `Hola, ${estudiante}`);
}

//3° La forma en que se va a saludar es generando un ciclo FOR en el cual:
//- Se declara una variale inicial i = 0
//- Mientras esa variable i sea menor que la longitud del array estudiantes
//- Entonces manda a llamar la funcion saludarEstudiantes, 
//se le manda como parametro el array en la posición de i. La posicion de i es el index. 
//Una vez que mandamos a llamar un array y le damos el numero del index, 
//va a devolver el elemento que esté en ese numero.
//- En definitiva, si se manda a llamar la funcion tiene que devolver un saludo para cada estudiante.
for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

//Lo que el ciclo hace por dentro es:
//i = 0, 0 es menor que 4
//como es verdad ejecuta el codigo entre llaves (tarea) 
//saluda el estudiante en la posicion de 0, es decir, del index. (Primer estudiante)
//La siguiente vez i++ va a hacer que i no valga 0, sino que i = 1
//OTRA VEZ evalua que i es menor que 4, como si lo es, ejecuta la tarea.
//NO PUEDE SER QUE i <= estudiantes.length xq significaria que se manda a llamar al cuarto elemento del array.
//y el array tiene solo 3. Ya que éste empieza en 0.

