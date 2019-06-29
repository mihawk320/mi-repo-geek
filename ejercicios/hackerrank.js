var s=7;
var t=11;
var a=5;
var b=15;
var contM=0;
var contN=0;
var m=[-2,4,5];
var n=[5,-6];

for(var i=0;i<m.length;i++){
    for(j=s;j<=t;j++){
        var d;
        d=m[i]+a;
        if(d==j){
            contM++;
        }
    }
}
document.write("Cayeron "+m.length+" manzanas, de las cuales dentro del rango cayeron "+contM + "<br>");

for(var l=0;l<n.length;l++){
    for(p=s;p<=t;p++){
        var c;
        c=n[l]+b;
        if(c==p){
            contN++;
        }
    }
}
document.write("Cayeron "+n.length+" naranjas, de las cuales dentro del rango cayeron "+contN + "<br>");
