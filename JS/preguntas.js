$(document).ready(function(){
    $('input').click(funVerificar());
    $('input[name=p1]:checked').val();
});
function funcVerificar(){
    alert('hola');
    $('input[name=p1]:checked').val();
    $("this input[type='radio']:checked").val();
}
