
//OBJECTS: FUNCION CONSTRUCTORA
//Forma en la que se generan muchos objetos de forma automatizada y no manual.

// Declarar funcion constructora
function auto (marca, annio){
    this.marca = marca;
    this.annio = annio;
}

//Construir objeto1
var autoPapi = new auto (amarok, 2012);
autoPapi //auto {marca: "amaraok", annio: 2012}

//Construir objeto2
var autoNelson = new auto (fiesta, 2018);
autoNelson //auto {marca: "fiesta", annio: 2018}