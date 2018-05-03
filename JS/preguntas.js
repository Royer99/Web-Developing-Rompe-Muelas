document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("Quiz").style.visibility='visible';
    });

    document.getElementById("Enviar").addEventListener("click", myFunction);


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
   for (i = 0; i < respuestas.length; i++) 
   {//recorre el arreglo respuesta
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
    imprimir(z[5].type);
}


function imprimir(key){
    switch ("arte"){//(key) {
        case "arte": //ARTE YA
            var x = Math.floor((Math.random() * 4) + 1);
            if (x==1){ //YA
                document.getElementById('nameResult').innerHTML = 'Eres Alejandro González Iñárritu';
                document.getElementById('title').innerHTML = '¡Sorpresa!';
                document.getElementById('contentParagraph').innerHTML = 'Alejandro González Iñárritu nació el 16 de agosto de 1963 en México, D.F., hijo de Luz María Iñárritu y Héctor González Gama.Cruzando el Atlántico y laborando en un barco carguero, primero a los 17 y después a los 19 años, González Iñárritu trabajó en Europa y África en dos diferentes periodos de su vida. Atribuye a estas experiencias la mayor influencia en su trabajo. Una de sus  películas más importantes es revenant, ganadora de un oscar en 2017.';
                document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/iñarritu1.jpeg" alt="First slide">';
                document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/iñarritu2.jpg" alt="First slide">';
                document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/iñarritu3.jpg" alt="First slide">';
                document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/iñarritu4.jpg" alt="First slide">';    
            }else if(x==2){ //YA
                document.getElementById('nameResult').innerHTML = 'Eres Frida Khalo';
                document.getElementById('title').innerHTML = '¡Sorpresa!';
                document.getElementById('contentParagraph').innerHTML = 'Pintora mexicana que se movió en el ambiente de los grandes muralistas mexicanos de su tiempo y compartió sus ideales, Frida Kahlo creó una pintura absolutamente personal, ingenua y profundamente metafórica al mismo tiempo, derivada de su exaltada sensibilidad y de varios acontecimientos que marcaron su vida.';
                document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/frida1.jpg" alt="First slide">';
                document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/frida2.jpg" alt="First slide">';
                document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/frida3.jpg" alt="First slide">';
                document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/frida4.jpg" alt="First slide">';    
            }else if(x==3){ //YA
                document.getElementById('nameResult').innerHTML = 'Eres Rafael Lozano';
                document.getElementById('title').innerHTML = '¡Sorpresa!';
                document.getElementById('contentParagraph').innerHTML = 'Tu al igual que el artista reconocido Rafael Lozano eres una persona muy creativa y que le gusta romper con los estereotipos, tienes una habilidad de comunicación muy desarrollada,muestras interés por los trabajos que involucran usar las manos y sueles realizar bosquejos  de las ideas que te vienen a la mente.';
                document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rafa1.jpg" alt="First slide">';
                document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rafa2.jpg" alt="First slide">';
                document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rafa3.jpg" alt="First slide">';
                document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rafa1.jpg" alt="First slide">';    
            }else{ //x==4 YA
                document.getElementById('nameResult').innerHTML = 'Eres Guillermo del Toro';
                document.getElementById('title').innerHTML = '¡Sorpresa!';
                document.getElementById('contentParagraph').innerHTML = 'Como buen cinéfilo, disfrutas de una buena película, y más con palomitas al lado. Te interesas mucho el desarrollo de los personajes en escena y analizas cada detalle que te ofrece la pantalla. Al igual que Guillermo del Toro,  te apasionan las buenas historias. ¿Sabías que Guillermo del Toro no sólo ha realizado trabajo en Hollywood? Así es, este gran director, guionista, productor y novelista mexicano conocido a nivel internacional realizó sus estudios en  el Instituto de Ciencias, en la ciudad de Guadalajara. Pasó diez años en diseño de maquillaje y formó su propia compañía, Necropia. Fue cofundador del Festival de Cine de Guadalajara y creó la compañía de producción Tequila Gang.<a href="https://es.wikipedia.org/wiki/Guillermo_del_Toro" > Conoce más a este orgulloso mexicano</a>';
                document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/guillermo1.jpeg" alt="First slide">';
                document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/guillermo2.jpg" alt="First slide">';
                document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/guillermo3.jpg" alt="First slide">';
                document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/guillermo4.jpg" alt="First slide">';    
            }
            break;
        
        case "ciencia": //CIENCIA
        var x = Math.floor((Math.random() * 4) + 1);
        if (x==1){ //YA
            document.getElementById('nameResult').innerHTML = 'Guillermo González Camarena';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Ingeniero mexicano menor de 8 hermanos. Fue pionero de la televisión mexicana e inventor de tres sistemas de televisión en color. Guillermo González Camarena realizó sus estudios de ingeniería en el Instituto Politécnico Nacional, en México D. F., y cursó la especialidad de electrónica.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/camarena1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/camarena2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/camarena3.png" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/camarena4.jpg" alt="First slide">';    
        }else if(x==2){ //YA
            document.getElementById('nameResult').innerHTML = 'Manuel Sandoval Vallarta';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'El doctor Sandoval Vallarta publicó alrededor de 60 trabajos, principalmente sobre métodos matemáticos, mecánica cuántica, relatividad general y, a partir de 1932, rayos cósmicos, que es donde se registran sus más valiosas aportaciones. El problema consistía en definir la composición y el origen de la radiación cósmica. La mayoría de los investigadores se inclinaban a creer que se trataba de una radiación como la luminosa pero de mucha más alta frecuencia. <br>El doctor Manuel Sandoval Vallarta fue presidente y vocal de la Comisión Impulsora y Coordinadora de la Investigación Científica (1943-1951) y del Instituto Nacional de la Investigación Científica. Además de eso, recibió el Premio Nacional de Ciencias Exactas y  fue miembro de la Legión de Honor de Francia.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/manuel1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/manuel2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/manuel3.jpeg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/manuel4.jpg" alt="First slide">';    
        }else if(x==3){ //YA
            document.getElementById('nameResult').innerHTML = 'Mario Molina';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Tu al igual que el ingeniero Mario Molina  eres una persona Ingeniosa, que siempre está buscando resolver problemas de manera creativa,a pesar de las adversidades por el amor que tienes a la ciencia eres capaz de hacer cualquier cosa, además de demostrar una capacidad analítica desarrollada.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/mario1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/mario2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/mario3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/mario4.jpg" alt="First slide">';    
       }else{ //x==4 //FALTA
            document.getElementById('nameResult').innerHTML = 'Rodolfo Neri Vela';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Rodolfo Neri Vela es un doctor en ingeniería mecánica electricista mexicano. Fue el primer astronauta mexicano en ir al espacio en su primera misión y el segundo latinoamericano, al crearse un programa de colaboración entre la Secretaría de Comunicaciones y Transportes de México y la NASA. Al igual que este pionero mexicano en el espacio comparten una curiosidad por lo nuevo, y disfrutan de aprender nuevas cosas.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rodolfo1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rodolfo2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rodolfo3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/rodolfo4.jpg" alt="First slide">';    
        }
        break;
        case "deportes": //DEPORTES YA
        var x = Math.floor((Math.random() * 4) + 1);
        if (x==1){ //YA
            document.getElementById('nameResult').innerHTML = 'Ricardo Vargas';
            document.getElementById('title').innerHTML = '¡Sorpresa!';
            document.getElementById('contentParagraph').innerHTML = 'El estudiante de universidad de origen morelense que debutó en el Mundial de Natación, durante la prueba de los 1,500 metros libre. El nadador compitió en los juegos olímpicos de Río 2016 en la prueba de los 1500 metros libres haciendo un tiempo de 15:14.18 minutos estableciendo un nuevo récord mexicano.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/Ricardo1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/Ricardo2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/Ricardo3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/Ricardo4.jpg" alt="First slide">';
         }else if(x==2){ //YA
            document.getElementById('nameResult').innerHTML = 'Javier Hernandez';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Javier Hernández se ha convertido en un referente del futbol mexicano, con 28 años y 45 goles con el Tri, apunta a consagrarse en lo más alto del balompié azteca. En el Apertura 2009, ‘Chicharito’ Hernández se despachó con 11 goles, brillando con las Chivas y siendo el mexicano con más anotaciones en el campeonato, dejando atrás nombres como el de Aldo de Nirgis, Juan Carlos Cacho y Rafael Márquez Lugo.El Manchester United firmó a Javier Hernández un 9 de abril de 2010, siendo probablemente el fichaje que más sorprendió al futbol mexicanoEl estreno del Estadio Omnilfe se dio con gol de Javier Hernández, ‘Chicharito’ jugó medio tiempo con la playera de Chivas y medio tiempo con la playera del Manchester United, fue despedido de Guadalajara como ídolo.Su fichaje con el Bayer Leverkusen resultó reconfortante para el jugador mexicano, hasta el momento ha sobresalido en la Bundesliga con 19 goles en la pasada temporada llevando a su equipo a la Champions League. ';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/chicharito1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/chicharito2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/chicharito3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/chicharito4.jpg" alt="First slide">';    
        }else if(x==3){ //YA
            document.getElementById('nameResult').innerHTML = 'Sergio Pérez';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Tu al igual que el piloto de fórmula 1 Checo Pérez  eres una persona apasionada por lo que hace,con una  alta confianza en sí mismo,que le ayuda a romper las reglas y los límites  para seguir adelante cuando parece que las cosas se ponen difíciles,la cualidad que más destaca es que estas todo el dia activo.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/sergio1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/sergio2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/sergio3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/sergio4.jpg" alt="First slide">';    
       }else{ //x==4 //YA
            document.getElementById('nameResult').innerHTML = 'Paola espinoza';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Así como Paola Espinoza, eres una persona que disfrutas de hacer actividad física y lo da todo para llegar a sus metas.Disfrutas de la emoción y salir con tus amigos, pero sabes perfectamente cuando es tiempo de regresar al estudio. Sabes que para lograr tus metas la constancia es vital ¿Sabías que Paola Espinoza es doble medallista olímpica campeona mundial en 2009, y tricampeona panamericana? Además se convirtió en la primera deportista mexicana en obtener dos preseas en distintas justas olímpicas. Así que, si al igual que Paola Espinoza tu tienes un talento y pasión por los deportes puedes tomar a esta joven mexicana como inspiración.<a href="https://es.wikipedia.org/wiki/Paola_Espinosa">Conoce más sobre esta deportista.</a>';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paola1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paola2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paola3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paola4.jpg" alt="First slide">';    
        }
        break;

        case "Musica": //MUSICA YA
        var x = Math.floor((Math.random() * 4) + 1);
        if (x==1){ //YA
            document.getElementById('nameResult').innerHTML = 'Carlos Santana';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Guitarrista mexicano de rock que desarrolló en San francisco su peculiar estilo como guitarrista, hecho de una mezcla de la música latina con el rock. En 1969 participó en el mítico festival de Woodstock y triunfó con Evil Ways, que revela la influencia de la salsa y el funk, y con uno de sus temas más conocidos, Oye cómo va, un ejemplo de música caribeña con ese toque rockero de la guitarra de Santana.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/carlos1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/carlos2.jpeg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/carlos3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/carlos4.jpg" alt="First slide">';    
        }else if(x==2){ //YA
            document.getElementById('nameResult').innerHTML = 'Luis Miguel';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Al igual que Luis Miguel, tienes un gran interés en la música. ¿Sabias que Luis Miguel grabó su primer disco a los 12 años? Y a pesar de no haber nacido en méxico, este gran cantante conocido a nivel internacional tiene la nacionalidad mexicana. Eres una persona que aprecia la buena música y nunca puede faltar en su día a día.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/luis1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/luis2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/luis3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/luis4.jpg" alt="First slide">';    
        }else if(x==3){ //YA
            document.getElementById('nameResult').innerHTML = 'Silvestre Revueltas O';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Tu al igual que el director de orquesta y compositor Silvestre Revueltas eres una persona que se caracteriza por la organización que tienes en tu vida y en tu trabajo , tu Capacidad de comunicación que es esencial para poder transmitir lo que sientes ,una persona detallista que le gusta romper los límites predefinidos y llegar a lugares que nunca nadie ha llegado.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/silvestre1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/silvestre2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/silvestre3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/silvestre4.jpg" alt="First slide">';    
         }else{ //x==4 //YA
            document.getElementById('nameResult').innerHTML = 'Alondra de la Parra';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Esta mexicana de 37 años y tú comparten una cosa, y es su pasión por la música. Eres una persona que disfruta de cada momento, te gusta expresar tus emociones a través de la música y no hay día que pase sin que escuches algo de tu artista favorito o porque no, busques melodías nuevas. ¿Sabías que Alondra de la Parra es una famosa directora de orquesta? Esta talentosa mexicana ha trabajado con las orquestas más prestigiosas del mundo incluyendo a la Orquesta de París, la de Londres, la de Zurich y muchas más. Sin embargo, ha ganado gran admiración del público por sus vibrantes interpretaciones musicales y su atención a compositores latinoamericanos. Así que si la música te apasiona quizás puedas encontrar en Alondra de la Parra nuevas melodías que compartas con tus amigos, escucha su último sencillo <a href="https://alondradelaparra.com/es/2017/11/02/mi-alma-mexicana/">“Mi alma mexicana”</a>';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/alondra4.jpg" alt="First slide">';    
        }
        break;
        case "Politica": //POLITICA YA
        var x = Math.floor((Math.random() * 4) + 1);
        if (x==1){ //YA
            document.getElementById('nameResult').innerHTML = 'Benito Juarez';
            document.getElementById('title').innerHTML = '¡Sorpresa!';
            document.getElementById('contentParagraph').innerHTML = 'Benito Juárez fue um político con nuevas ideal liberales durante su mandato logró llevar a la práctica el ideario liberal, dictando leyes para hacer efectiva la reforma agraria, la libertad de prensa, la separación entre la Iglesia y el Estado. Es una gran muestra que a donde llegarás no importa de donde provengas.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/benito1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/benito2.jpeg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/benito3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/benito4.png" alt="First slide">';
        }else if(x==2){ //YA
            document.getElementById('nameResult').innerHTML = 'Profirio Diaz';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Gracias a Porfirio Diaz, en  1911 el país contaba con más de 20 mil kilómetros de vías ferroviarias, cuando en 1876 apenas existían 800 kilómetros. Al principio de su gobierno se promovió la construcción ferroviaria por medio de concesiones a los gobiernos de los estados y a particulares mexicanos.En 1880 se otorgaron tres importantes concesiones a inversionistas estadounidenses, con toda clases de facilidades para la construcción e importación de material. Entre 1877 y 1911 se construyeron de 7,136 a 23,654 kilómetros en cuestión de vías telegráficas. En tanto, el sistema de correos, que durante todo el siglo XIX era atacado e intervenido por bandoleros, logró un relativo crecimiento con la paz de la época, puesto que se establecieron más de 1,200 oficinas de correo. ';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/porfirio1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/porfirio2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/porfirio3.jpeg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/porfirio4.jpeg" alt="First slide">';    
        }else if(x==3){ //YA
            document.getElementById('nameResult').innerHTML = 'Agustin Carstens';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Tu al igual que el economista miembro del fondo monetario internacional Agustín Carstens eres una persona con capaz de resolver problemas numéricos de alta dificultad, los cuales implican lógicas complejas.Demuestran un gusto por la historia de las culturas y consideras que es importante para poder predecir su comportamiento.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/carstens1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/carstens2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/carstens3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/agustin4.jpg" alt="First slide">';    
         }else{ //x==4 //YA
            document.getElementById('nameResult').innerHTML = 'Pedro Kumamoto';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Eres una persona a la que le gusta saber qué pasa actualmente en el mundo y tiene un gran sentido de responsabilidad ciudadana. Te gusta decir lo que piensas en situaciones y hablar por quienes no se pueden defender. Al igual que tu, pedro Kumamoto tiene un gran sentido de justicia. Con apenas 28 años, logró ser el primer candidato independiente en ganar una elección para ocupar un puesto de representación popular en Jalisco. En entrevistas anteriores explica que decidió entrar a la política por su deseo de ver que las cosas en el gobierno mejora y no sólo buscar el cambio a través de las quejas, sino con acciones. Si tu interés por mejorar las cosas en el país siguen el mismo trayecto que el de Pedro Kumamoto, quizá encuentres en él una nueva inspiración. <a href=”http://kumamoto.mx/”>Conocé más sobre este Mexicano</a>';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/pedro1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/pedro2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/pedro3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/pedro4.jpg" alt="First slide">';    
        }
        break;
        case "emprendimiento": //EMPRENDIMIENTO
        var x = Math.floor((Math.random() * 4) + 1);
        if (x==1){ //YA
            document.getElementById('nameResult').innerHTML = 'Ana Paula Azuela';
            document.getElementById('title').innerHTML = '¡Sorpresa!';
            document.getElementById('contentParagraph').innerHTML = 'Codirectora de Voy al Doc, es un marketplace de salud que conecta a pacientes con proveedores de servicios médicos. Permite a los usuarios tomar una decisión informada sobre el doctor que mejor se ajusta a sus necesidades y agendar citas al instante, ya sea vía Internet (www.voyaldoc.com), por teléfono o app.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/ana1.jpeg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/ana2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/ana3.jpeg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/ana4.jpeg" alt="First slide">';
        }else if(x==2){ //YA
            document.getElementById('nameResult').innerHTML = 'Carlos Slim';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Magnate mexicano. Fundador del Grupo Carso, fue clave en el espectacular crecimiento de su imperio empresarial su desembarco en el mercado de las telecomunicaciones, propiciado por la privatización en 1990 de Teléfonos de México, S.A. (Telmex), que quedó bajo su control. Habitual desde entonces en las listas de las grandes fortunas de la revista Forbes, la misma publicación lo encumbró como el hombre más rico del mundo en los años 2010, 2011 y 2012.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/slim1.jpeg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/slim2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/slim3.jpeg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/slim4.jpeg" alt="First slide">';    
        }else if(x==3){ //YA
            document.getElementById('nameResult').innerHTML = 'Lorenzo Zambrano';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Tu al igual que el empresario emprendedor Lorenzo Zambrano fundador de CEMEX eres una persona capaz de tener una visión delante de las cosas que pueden pasar, No le tienes miedo a los fallos y demuestran una capacidad de aprendizaje desarrollada capacidad de aprendizaje, tu característica más importante es la resiliencia para poder afrontar los retos y errores además de tomar lo mejor de ellos.';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/lorenzo1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/lorenzo2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/lorenzo3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/lorenzo4.jpg" alt="First slide">';    
         }else{ //x==4 //YA
            document.getElementById('nameResult').innerHTML = 'Andrea Ibargüengoitia y Karen Rodarte';
            document.getElementById('title').innerHTML = '¡Sorpresa! ';
            document.getElementById('contentParagraph').innerHTML = 'Eres una persona desenvuelta y llena de ideas. Te atrae el negocio y tienes ideas que valen la pena compartirse. Andrea Ibargüengoitia y Karen Rodarte, son dos mejores amigas mexicanas que compartieron una visión y pusieron en marcha una idea de negocios. Pai pai, su marca se dedica a hacer labiales inspirados en las tradiciones y cultura mexicana, los colores tienen nombres de flores y elementos como horchata, bugambilia o grosella. El empaque trae impresas obras de artistas plásticos mexicanos, representando en cada uno un aspecto de México. Así que si tienes una visión de negocios y una buena compañía como mano derecha no dudes en compartir tu visión y emprender en México. <a href=”http://www.rsvponline.mx/perfiles/andrea-ibarguengoitia-y-karen-rodarte-crean-pai-pai” >Conoce toda la historia de estas dos amigas</a> ';
            document.getElementById('car1').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paipai1.jpg" alt="First slide">';
            document.getElementById('car2').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paipai2.jpg" alt="First slide">';
            document.getElementById('car3').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paipai3.jpg" alt="First slide">';
            document.getElementById('car4').innerHTML = ' <img class="d-block w-100 h-200" src="../IMAGENES/personajes/paipai4.jpg" alt="First slide">';    
        }
        break;
    

    }
}
    
    
