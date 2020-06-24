//Scope - Alcance de las variables
/*****scope global existen todas las variables****/
/*****scope local dentro de las funciones *****/

var nombre = "Paulina";//variable en scope global 


function getName(){
    var apellido = "Guevara";//variable en scope local 
    console.log(nombre + apellido);
}


