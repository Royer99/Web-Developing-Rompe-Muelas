var contadorArte = 0;
var contadorCiencia = 0;
var contadorDep = 0;
var contadorMusica = 0;
var contadorPres = 0
var contadorEmprendimiento=0;
var key;


function myFunction() {
  // var respuestas = document.forms[0];//hace un arreglo que inicia en cero de los buttonradios y lo guarda en la variable respuesta
   var respuestas =document.getElementsByClassName('movil'); //crea un arreglo con los que tengan la clase movil, que se guarda en la variable respuesta
   var i;
   for (i = 0; i < respuestas.length; i++) {//recorre el arreglo respuesta
        if (respuestas[i].checked) {//si el radioButton fue checado
            if (respuestas[i].value=='arte') {//y el valor es igual a oscar
                contadorArte = contadorArte + 1; //cuenta mas uno
             } else if(respuestas[i].value=='ciencia'){
                contadorCiencia = contadorCiencia + 1; //cuenta mas uno
             } else if(respuestas[i].value=='deportes'){
                contadorDep = contadorDep + 1; //cuenta mas uno
            } else if(respuestas[i].value=='musica'){
                contadorMusica = contadorMusica + 1; //cuenta mas uno
            }else if(respuestas[i].value=='emprendimiento'){
                contadorEmprendimiento= contadorEmprendimiento+1;
            } else{
                contadorPres = contadorPres + 1; //cuenta mas uno
        }
    }
}

    var contadores = [{type: "arte", hua: contadorArte},{type: "ciencia", hua : contadorCiencia},{type: "deportes", hua : contadorDep},{type: "Musica", hua : contadorMusica},{type: "emprendimiento", hua : contadorEmprendimiento},{type: "Politica", hua : contadorPres}];
   /* document.getElementById("order1").value = "Arte: " + contadorArte;
    document.getElementById("order2").value = "Nobel: " + contadorCiencia;
    document.getElementById("order3").value = "Deportes: " + contadorDep;
    document.getElementById("order4").value = "Musica: " + contadorMusica;
    document.getElementById("order5").value = "Politica: " + contadorPres;
    document.getElementById("order6").value = "Emprendimiento: " + contadorEmprendimiento;*/
  
    return ganador(contadores);

}

function ganador(contadores){
    var z;

    z=contadores.sort(function(a, b){return a.hua-b.hua});
  
    document.getElementById("order7").value = z[5].type + " " + z[5].hua;
    console.log(z[5].type + " " + z[5].hua);
    key= z[5].type ;
}


try{
    switch (key) {
        case "Arte": //CIENCIA
            console.log("PASO 1");
            document.getElementById('nameResult').innerHTML = 'Arte González Camarena';
            document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';
            document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">';
        break;
        case "Nobel":
        document.getElementById('nameResult').innerHTML = 'Nobel González Camarena';
        document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';
        document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';
        document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
        document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
        document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
        document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">';
    
        break;
        case "Deportes":
        document.getElementById('nameResult').innerHTML = 'Deportes González Camarena';
        document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';
        document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';
        document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
        document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
        document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
        document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">';
    
        break;
        case "Musica":
        document.getElementById('nameResult').innerHTML = ' Musica Camarena';
        document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';
        document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';
        document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
        document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
        document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
        document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">';
    
        break;
        case "Politica":
        document.getElementById('nameResult').innerHTML = 'Politica González Camarena';
        document.getElementById('title').innerHTML = '! <br> Eres Guillermo González Camarena'+
        '<'+'div class="fb-share-button"'+' data-href="'+'http://tamayo.qro.itesm.mx/a1209400/Rompemuelas/HTML/intro.html'+'" data-layout="button"'+' data-size="large" '+'data-mobile-iframe="false"><a target="_blank" '+'href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ftamayo.qro.itesm.mx%2Fa1209400%2FRompemuelas%2FHTML%2Fintro.html&amp;src=sdkpreparse"'+' class="fb-xfbml-parse-ignore">Compartir</a></div>';
        document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';
        document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
        document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
        document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
        document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">';
    
        break;
        case 'emprendimiento':
        document.getElementById('nameResult').innerHTML = 'Emprendimiento González Camarena';
        document.getElementById('title').innerHTML = '¡Sorpresa! <br> Eres Guillermo González Camarena';
        document.getElementById('contentParagraph').innerHTML = ' Descripcion del personaje Guillermo...';
        document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
        document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
        document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
        document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">';
    
        break;
    

    }
    
    
        
}catch(e){
    console.log("catch");
}