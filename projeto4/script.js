
$(document).ready(function() {
    $('form').on("submit", function(e) {
        e.preventDefault();
        const addTarefa = $('#input-tarefa').val();
        const novaTarefa = $('<li style="display: none;"></li>');
        $(`<h2>${addTarefa}</h2>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(500);
        $('#input-tarefa').val('');
    });
    $('ul').on("click", "li", function(){
        $(this).toggleClass('riscado');
    });

});