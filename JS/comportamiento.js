console.log("Javascript funciona");

var opc = document.getElementById('opciones')
//opc.innerHTML = "opcion 1";
var ciencia = document.getElementById('ciencia');   //1
ciencia.addEventListener("click", function(){
    myFunction2('Ciencia');});
var deportes = document.getElementById('deportes'); //2
deportes.addEventListener("click", function(){
    myFunction2('Deportes');});
var musica = document.getElementById('musica');     //3
musica.addEventListener("click", function(){
    myFunction2('Música');});
var arte = document.getElementById('arte');         //4
arte.addEventListener("click", function(){
    myFunction2('Arte');});
var poli = document.getElementById('poli');         //5
poli.addEventListener("click", function(){
    myFunction2('Política');});
var empre = document.getElementById('empre');       //6
empre.addEventListener("click", function(){
    myFunction2('Emprendimiento');});

function myFunction2( titulo){
  console.log("PASO 3");
  document.getElementById('TituloModal').innerHTML = titulo;


}
