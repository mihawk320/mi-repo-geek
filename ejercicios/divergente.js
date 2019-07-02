var abnegacion=0;
var cordialidad=0;
var erudicion=0;
var osadia=0;
var verdad=0;
var divergente=0;
var clase="";

for(var i=0;i<20;i++){
    
    clase=prompt("Ingrese la respectiva letra de su clase: ");
    clase=clase.toLowerCase();

    switch(clase){
        case "a":
        abnegacion++;
        break;
         case "c":
        cordialidad++;
        break;
         case "e":
        erudicion++;
        break;
         case "o":
        osadia++;
        break;
         case "v":
        verdad++;
        break;
        default:
        divergente++;
        break;
    }
}

function porcentajes(clase){
    var porcentaje;
    porcentaje=(clase/20)*100;
    return porcentaje;
}

abnegacion=porcentajes(abnegacion);
cordialidad=porcentajes(cordialidad);
erudicion=porcentajes(erudicion);
osadia=porcentajes(osadia);
verdad=porcentajes(verdad);
divergente=porcentajes(divergente);

document.write("El porcentaje de abnegacion es: "+abnegacion+"%"+"<br>");
document.write("El porcentaje de cordialidad es: "+cordialidad+"%"+"<br>");
document.write("El porcentaje de erudicion es: "+erudicion+"%"+"<br>");
document.write("El porcentaje de osadia es: "+osadia+"%"+"<br>");
document.write("El porcentaje de verdad es: "+verdad+"%"+"<br>");
document.write("El porcentaje de divergente es: "+divergente+"%"+"<br>");

var total=divergente+osadia;

if(total>=40){
    document.write("<h1>Se pudo elaborar el plan</h1>")
}

else{
    document.write("No se pudo elaborar el plan")
}