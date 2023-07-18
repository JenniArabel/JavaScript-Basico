//el console.log es una funcion del navegador que nos imprime un resultado (variables, funciones, etc)
console.log(miNombre); 

var miNombre; //declarando variable
miNombre = "Jenni"; //inicializar variable

//Casi siempre se declara e inicializa en el momento
var miNombre2 = "Katherina";

//En ocasiones se declara la variable, pero todavia no se tiene su valor.
//Lo que pasa con hoisting es que en ocasiones se manda a llamar variables sin haberlas declarado.


//Ejemplo de hoisting con funciones
//se manda a llamar primero la funcion 
hey ();
//se declara despues
function hey(){
    console.log("Hola" + miNombre);
}