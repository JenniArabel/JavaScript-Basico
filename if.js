//CONDICIONAL IF
//lo que está entre parentesis (condición) debe ser verdadero para ejecutar el código
if (true)  {
    console.log("Hola");
} 

//CONDICIONAL IF - ELSE
if (false)  {
    console.log("Hola");
} else {
    console.log("Hola Jenni. - INSTRUCCIÓN FALSA");
}

//CONDICIONAL IF - ELSE IF
var edad = 18;

if (edad === 18)  {
    console.log("Es mayor de edad. Puede votar.");
} else if (edad > 18) {
    console.log("Puede votar de nuevo");
} else{
    console.log("Aun no puede votar")
}


//OPERADOR TERNARIO: GENERAR IF - ELSE EN UN SOLA LÍNEA
//Sintaxis:
condition ? true : false;

var num = 1;

var result = num === 1 ? "Soy 1" : "No soy 1";

console.log(result); //resultado "Soy 1"


//EJERCICIO:

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("El usuario ganó con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "El usuario ganó con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("El usuario ganó con " + op3)
        }else{
            console.log("La CPU ganó!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //El usuario ganó con piedra