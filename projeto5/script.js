$(document).ready(function(){

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome corretamente.',
            email: 'Digite seu e-mail corretamente.',
            telefone: 'Digite seu telefone corretamente.',
            cpf: 'Por favor digite seu cpf corretamente.',
            endereco: 'Por favor digite seu endereço corretamente.',
            cep: 'Por favor digite seu cep corretamente.',
            errorClass: '.error',
            validClass: '.valid'
        }
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Digite seu telefone celular com DDD.'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Digite seu CPF corretamente.'
    });

    $('#cep').mask('00000-000', {
        placeholder: 'Digite seu CEP corretamente.'
    });
})