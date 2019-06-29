var totalPuntos=1230;
var amigos = ["Mike","Lucas","Dustin","Eleven","Max"];
var artefactos=3;
var puntosArtefactos=[0,0,0,0,0];
var porcentajes=[0,0,0,0,0];

var total=0;

for(var i=0;i<amigos.length;i++){
    for(var j=0; j<artefactos;j++){
        do{
            var artefacto=prompt("Digite los puntos del artecto "+(j+1) + "recolectado por "+amigos[i]);
            artefacto=parseInt(artefacto);
        }while(artefacto<1 || artefacto>100)
       
        total+=puntosArtefactos[i];
        puntosArtefactos[i]+=artefacto;
        alert("El total de puntos va en "+ puntosArtefactos[i]);
    }
    
}
document.write("El total de puntos es: "+ total + "<br>" );

for(var k=0;k<puntosArtefactos.length;k++){
    document.write("los puntos que recogió "+ amigos[k]+" Fueron en total "+ puntosArtefactos[k]+ "<br>");
}

for(var o=0;o<porcentajes.length;o++){
    document.write("El porcentaje de "+ amigos[o]+" en el total es de "+ (puntosArtefactos[o]/total*100)+"<br>");
}


//Ejercicio numero 10
//terminar toda la unidad de basic en freecodecamp en Js
//john.florez@academiageek.com
//Exposición para el