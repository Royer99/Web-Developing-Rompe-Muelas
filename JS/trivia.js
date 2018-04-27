$(document).ready(function(){
    $('div.shadowTrivia').hover(function(){
        division = $(this);
    });

     $('input').click(function(){
        valor = $(this).val();
        funcVerificar();
    });   
});
function funcVerificar(){
    division.removeClass('shadowTrivia');
    division.removeClass('shadowTriviaRigth');
    division.removeClass('shadowTriviaWrong');
    if(valor == 1){
        division.addClass('shadowTriviaRigth');
    }
    else{
        division.addClass('shadowTriviaWrong');
    }
    suma = $('.shadowTriviaRigth').length + $('.shadowTriviaWrong').length;
    if(suma == 10){
        if($('.shadowTriviaRigth').length == 10){
            alert('100% mexicano');
        }
        else if($('.shadowTriviaRigth').length > 8 ){
            alert('bien hecho');
        }
        else if($('.shadowTriviaRigth').length > 7){
            alert('puedes mejorar');
        }
        else if($('.shadowTriviaRigth').length > 6){
            alert('panzaso');
        }
        else{
            alert('sigue practicando');
        }
    }
}
var division;
var valor;
var suma;