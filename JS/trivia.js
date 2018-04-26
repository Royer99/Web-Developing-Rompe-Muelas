$(document).ready(function(){
    $('form').click(funcVerificar);
    //$('input[name=p1]:checked').val();
});
function funcVerificar(){
    alert($(this).val());
}