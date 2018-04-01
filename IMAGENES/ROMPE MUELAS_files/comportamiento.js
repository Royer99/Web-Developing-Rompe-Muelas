console.log("Javascript funciona");

try {
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
      //console.log("PASO 3");
      document.getElementById('TituloModal').innerHTML = titulo;
    }   
} catch (error) {
    
}

var key=1;

switch (key) {
    case 1: //CIENCIA
        console.log("PASO 1");
        document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
        document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
        document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
        document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
        document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
        document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
        document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 
    break;
    case 2:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 3:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 4:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 5:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;
    case 6:
    document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';   
    document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';    
    document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';    
    document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
    document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
    document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
    document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">'; 

    break;

    default:
    alert("Ocurrio un error");
        break;
}
