var meta=0;
var integrantes=["Wendy","Dipper","Soos","Mabel"];
var dinero=[0,0,0,0];
var total=0;
var porcentajes=[0,0,0,0];
meta=prompt("Ingrese la meta de dinero para la cabaña");
var metaPersonal=meta/4;
alert("La meta de cada uno es " + metaPersonal);

    for(var i=0;i<integrantes.length;i++){
        var money=prompt("Ingrese el dinero que recogio "+integrantes[i]);
        dinero[i]+=money;
    
        if(dinero[i]>metaPersonal){
         document.write(integrantes[i]+ " Recogio el dinero, " + "(" + parseInt(dinero[i]) + " dolares)" + "<br>")
        }
        else{
         document.write(integrantes[i]+ " No recogio lo suficiente, " + "(" + parseInt(dinero[i]) + " dolares)" + "<br>");
        }
        total+=parseInt(dinero[i]);
    }

if(total>=meta){
    document.write("<h2>Se logró cumplir con la meta asignada</h2> <br>")
}
else{
    document.write("<h2>No se logró cumplir con la meta asignada</h2> <br>")
}

for(var o=0;o<porcentajes.length;o++){
    document.write("El porcentaje de "+ integrantes[o]+" en el total es de "+ Math.round(dinero[o]/total*100)+ "%<br>");
}
