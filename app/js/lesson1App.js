

var persona1={
 nombre:"Juan",
 ape1:"Garcia",
 edad:34,
 getNombreCompleto:function() {
 return this.nombre+ " "+this.ape1;
 }
}

var persona2={};
persona2.nombre="Pedro";
persona2.ape1="Perez";
persona2.edad=25;
persona2.getNombreCompleto=function() {
 return this.nombre + " " + this.ape1;
};

function Persona() {
 this.nombre="Jose";
 this.ape1="Muñoz";
 this.edad=30;
 this.getNombreCompleto=function() {
 return this.nombre+ " " +this.ape1;
 };
}

var persona3 =new Persona(); 

