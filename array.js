var frutas = [
    "Manzana", "Banana", "Frutilla", "Cereza"
];

console.log(frutas); //(4) "Manzana", "Banana", "Frutilla", "Cereza"

//Cuantos elementos tiene el array
console.log(frutas.length); //4

//Mostrar posición de cereza
console.log(frutas[3]); //Cereza

//Modificar array: MÉTODOS.

//AGREGAR
var masFrutas = frutas.push("Uvas");
//push es un método que añade elementos al final del array. 

//ELIMINAR
var masFrutas = frutas.pop("Uvas");

//unshift: agrega un nuevo elemento al inicio del array.
var nuevaFruta = frutas.unshift("Coco");

//shift: elimina el elemento que está al inicio del array. 
var borrarFruta = frutas.shift("Coco");
//BORRAR CUALQUIER ELEMENTO QUE VAYA PRIMERO A PESAR DE QUE NO SEA EL MISMO QUE ESTÁ ENTRE "COMILLAS"

//INDEXOF: trae la posicion de un elemento
var posicion = frutas.indexOf ("Cereza"); //3
