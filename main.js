$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#tarefa').val();
    const novo = $(`<li id="item">${tarefa}</li>`)
    $(novo).appendTo('ul');
    $('#tarefa').val('');
})

$('ul').on('click', 'li', function() {
    $(this).addClass('feito');
});