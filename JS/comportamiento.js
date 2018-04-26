console.log("Javascript funciona");

try {
    var ciencia = document.getElementById('ciencia');   //1
    ciencia.addEventListener("click", function(){
        myFunction2('Ciencia',1);});
    var deportes = document.getElementById('deportes'); //2
    deportes.addEventListener("click", function(){
        myFunction2('Deportes',2);});
    var musica = document.getElementById('musica');     //3
    musica.addEventListener("click", function(){
        myFunction2('Música',3);});
    var arte = document.getElementById('arte');         //4
    arte.addEventListener("click", function(){
        myFunction2('Arte',4);});
    var poli = document.getElementById('poli');         //5
    poli.addEventListener("click", function(){
        myFunction2('Política',5);});
    var empre = document.getElementById('empre');       //6
    empre.addEventListener("click", function(){
        myFunction2('Emprendimiento',6);});

    function myFunction2( titulo, num){
      //console.log("PASO 3");
      document.getElementById('TituloModal').innerHTML = titulo;
      switch (num) {
        case 1: //CIENCIA
           document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/eduardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo González Camarena</h5><p>Científico, investigador e ingeniero. Creador de la televisión a color</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/manuel1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Manuel Sandoval Vallarta</h5><p>Físico. Aportaciones a la física de los rayos cósmicos</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/mario1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Mario Molina</h5><p> Ingeniero químico mexicano destacado por ser uno de los descubridores de las causas del agujero de ozono antártico.</p></div>';
            document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rodolfo1.png" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rodolfo Neri Vela</h5><p> Doctor en ingeniería mexicana. Primer astronauta mexicano en ir al espacio en su primera misión.</p></div>';    
        break;
        case 2: //DEPORTES
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/checo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Sergio Perez</h5><p>Corredor de  la formula 1 </p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/Ricardo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Ricardo Vargas</h5><p>Nadador Profesional</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/javier1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Javier Hernandez</h5><p> Descripcion</p></div>'; 
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Paola Espinosa</h5><p>Clavadisgta profesional</p></div>';
        break;
        case 3: //MUSICA
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/silvestre1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Silvestre Revueltas</h5><p>Descripcion</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/alondra1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Alondra de la parra</h5><p>Directora de orquesta</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p> Descripcion</p></div>'; 
            document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/.jpg alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p>Descripcion</p></div>';
        break;
        case 4: //ARTE
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rafaellozano1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rafael Lozano</h5><p>Descripcion</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/guillermo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo del Toro</h5><p>Director de cine</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p> Descripcion</p></div>'; 
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p>Descripcion</p></div>';
         break;
        case 5: //POLITICA
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/carstens1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Agustin Carstens</h5><p>Descripcion</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/pedro1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Pedro Kumamoto</h5><p>Politico Mexicano independiente</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p> Descripcion</p></div>'; 
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p>Descripcion</p></div>';
        break;
        case 6: //EMPRENDIMIENTO
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/lorenzo1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Lorenzo Zambrano</h5><p>Descripcion</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/andrea1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p>Descripcion</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p> Descripcion</p></div>'; 
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>nombre</h5><p>Descripcion</p></div>';
        break;
        default:
        break;
      }

    }
} catch (error) {

}


    }
} catch (error) {

}
