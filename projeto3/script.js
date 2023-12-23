const formulario = document.getElementById('formulario');
const nomeRepetido = `<tr class='existente'>`;

let linha = ``;
const listaContatos = [];
const listaNumeros = [];

formulario.addEventListener('submit', function(e){
    console.log(listaContatos + " " + listaNumeros)
    e.preventDefault();
    criarContato();  
    adicionaLinha();  
    
});

function criarContato(){
    const nomeContato = document.getElementById('nome');
    const numeroContato = document.getElementById('numero');
    
    if(listaNumeros.includes(numeroContato.value)){
        alert(`Você está tentando adicionar um número de telefone que já existe.
        Por favor, confira o número!`);
    } else {
        let inicio = '';
        if(listaContatos.includes(nomeContato.value)){
            alert(`O contato que deseja adicionar, já tem pelo menos um número cadastrado.`);
            inicio = nomeRepetido;
        } else {
            inicio = `<tr>`;
        }
        listaContatos.push(String(nomeContato.value));
        listaNumeros.push((numeroContato.value));
        for(i in listaContatos){
            id = listaContatos.length;
        }
        let texto = `${inicio}<td>${id}</td>`;
        texto += `<td>${nomeContato.value}</td>`;
        texto += `<td>${numeroContato.value}</td></tr>`;
        linha += texto;
        numeroContato.value = '';
        nomeContato.value = '';
    }
}

function adicionaLinha(){
    const linhaContato = document.querySelector('tbody');
    linhaContato.innerHTML = linha;
}

