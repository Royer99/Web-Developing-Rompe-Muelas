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
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/chicharito1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Javier Hernandez</h5><p>Futbolista mexicano, nacido en Guadalajara.</p></div>';
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/paola1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5 style="color:black;">Paola Espinosa</h5><p style="color:black;">Clavadista profesional</p></div>';
        break;
        case 3: //MUSICA
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/silvestre3.jpg" alt="First slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Silvestre Revueltas</h5><p>Compositor mexicano modernista de música sinfónica de la primera mitad del siglo XX</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/alondra1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Alondra de la parra</h5><p>Directora de orquesta</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/luis4.jpg" alt="Third slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Luis Miguel</h5><p>Cantante y productor musical mexicano nacido puertorriqueño y considerado como uno de los artistas más populares en la historia de América Latina.</p></div>';
            document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/carlos1.jpg" alt="Third slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Carlos Santana</h5><p>Guitarrista mexicano que a fines de la década de 1960 fundó la agrupación Santana, pionera en fusionar la música latina con el rock.</p></div>';
        break;
        case 4: //ARTE
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/rafaellozano2.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Rafael Lozano</h5><p>Artista electrónico que trabaja con ideas de la arquitectura, teatro tecnológico y performance.</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/guillermo2.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Guillermo del Toro</h5><p>Director, guionista, productor y novelista mexicano, galardonado con el Premio Goya y varias veces con el Premio Ariel.</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/frida4.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Frida Kahlo</h5><p> Pintora mexicana.</p></div>';
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/iñarritu4.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Alejandro González Iñárritu</h5><p>Cineasta, guionista, productor, locutor y compositor mexicano, ganador de cinco premios Óscar.</p></div>';
         break;
        case 5: //POLITICA
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/carstens3.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Agustin Carstens</h5><p>Funcionario público y economista mexicano.</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/pedro1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Pedro Kumamoto</h5><p>Politico Mexicano independiente</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/porfirio1.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Porfirio Diaz</h5><p>Militar mexicano que ejerció el cargo de presidente de México en siete ocasiones. </p></div>';
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/benito3.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Benito Juárez</h5><p>Abogado y político mexicano, de origen indígena, presidente de México en varias ocasiones, del 18 de diciembre de 1857 al 18 de julio de 1872.​</p></div>';
        break;
        case 6: //EMPRENDIMIENTO
            document.getElementById('0').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/lorenzo4.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Lorenzo Zambrano</h5><p>Empresario mexicano, que sirvió como Director General y Presidente del Consejo de CEMEX.</p></div>';
            document.getElementById('1').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/paipai2.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Andrea Ibargüengoitia y Karen Rodarte</h5><p>Crean Pai Pai, una línea de lipsticks hechos con elementos mexicanos, que fusionan diseño, arte y belleza.</p></div>';
            document.getElementById('2').innerHTML = '<img class="d-block"  width="100%"src="../IMAGENES/personajes/slim2.jpg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Carlos Slim</h5><p>Empresario e ingeniero mexicano y el quinto hombre más rico del mundo, ya que posee bienes que ascienden a los 69 300 millones de dólares.​​</p></div>';
             document.getElementById('3').innerHTML = '<img class="d-block" width="100%" src="../IMAGENES/personajes/ana1.jpeg" alt="Second slide">'
            + '<div class="carousel-caption d-none d-md-block"><h5>Ana Paula Azuela</h5><p>Emprendedora mexicana.</p></div>';
        break;
        default:
        break;
      }

    }
} catch (error) {

}
