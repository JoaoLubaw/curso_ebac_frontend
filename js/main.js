
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true});
})

$('.menu-hamburguer').click(function() {
$('nav').slideToggle();
})

$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(__) _____-____'
})

$('#telefone2').mask('(00) 00000-0000',{
    placeholder: '(__) _____-____'
})

$('#cpf').mask('000.000.000-00',{
    placeholder: '___.___.___-__'
})

$('#cep').mask('00000-000',{
    placeholder: '_____-___'
})

$('#formcontato').validate({
    rules:{
        nome: {
            required:true
        },
        email: {
            required:true,
            email:true
        },
        telefone: {
            required:true
        },
        mensagem: {
            required: true
        },
        veiculoInteresse: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor insira seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

$('#formcadastro').validate({
    rules:{
        nome: {
            required:true
        },
        telefone: {
            required:true
        },
        email: {
            required:true,
            email:true
        },
        cpf: {
            required:true
        },
        endereco: {
            required:true
        },
        cep: {
            required:true
        }
    },
    messages: {
        nome: 'Por favor insira seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

$('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interesse').val(nomeVeiculo);

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})