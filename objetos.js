//CREAR UN OBJETO: llevar de un objeto fisico al paradigma orientado a objetos.

 var miAuto = {
    marca: "Volskwagen",
    modelo: "Amarok",
    annio: 2012
 };

 //Para acceder a los objetos:
 miAuto.marca //"Volskwagen"
 miAuto.annio //2012

 //FUNCION COMO PROPIEDAD DE UN OBJETO
 var miAuto = {
    marca: "Volskwagen",
    modelo: "Amarok",
    annio: 2012,
    detalleDelAuto: function(){
        console.log(`Auto ${this.marca} ${this.annio}`);
        //this es una variable que hace referencia al objeto que es su padre.
    }
 };
//Para mandar a llamarla, se tiene que llamar como una funcion
 miAuto.detalleDelAuto() //Auto Volskwagen 2012

 