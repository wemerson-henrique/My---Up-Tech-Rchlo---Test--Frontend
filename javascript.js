const inputName  = document.querySelector('#quantidadeProduto');
inputName.addEventListener("keypress",function(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    var quantidadeProduto = document.getElementById('quantidadeProduto').value;
    var quantidade = quantidadeProduto.toString().length;
    if ((keyCode < 48 || keyCode > 57) || quantidade > 1) {
        e.preventDefault();
    }
    
});

quantidadeProduto.addEventListener('input',ValorTotal);
function ValorTotal(){
    var quantidadeProduto = document.getElementById('quantidadeProduto');
    var quantidade = quantidadeProduto.value;
    if (quantidade <= 99) {
        var total = 69.9*quantidade;
        var saida = `R$ ${total.toFixed(2)}`;
        document.getElementById('valorTotal').value = saida;
    } else {
        
        document.getElementById('valorTotal').value = "oi";
    }
    

}

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const numeroCVV = document.getElementById('numeroCVV');
const selectBandeira = document.getElementById('selectBandeira');
const validadeCartao = document.getElementById('validadeCartao');


nome.addEventListener('invalid', function() {
    nome.setCustomValidity('Escreva seu nome completo.');
    this.classList.add('invalid');
}, false);
nome.addEventListener('change', function() {
    nome.setCustomValidity('');
    this.classList.remove('invalid');
}, false);

email.addEventListener('invalid', function() {
    email.setCustomValidity('Email obrigatório.');
    this.classList.add('invalid');
}, false);
email.addEventListener('change', function() {
    email.setCustomValidity('');
    this.classList.remove('invalid');
}, false);

cpf.addEventListener('invalid', function() {
    cpf.setCustomValidity('CPF obrigatório.');
    this.classList.add('invalid');
}, false);
cpf.addEventListener('change', function() {
    cpf.setCustomValidity('');
    this.classList.remove('invalid');
}, false);

numeroCVV.addEventListener('invalid', function() {
    numeroCVV.setCustomValidity('Padrão inválido para o CVV.');
    this.classList.add('invalid');
}, false);
numeroCVV.addEventListener('change', function() {
    numeroCVV.setCustomValidity('');
    this.classList.remove('invalid');
}, false);

selectBandeira.addEventListener('invalid', function() {
    selectBandeira.setCustomValidity('Selecione uma bandeira.');
    this.classList.add('invalid');
}, false);

selectBandeira.addEventListener('change', function() {
    selectBandeira.setCustomValidity('');
    this.classList.remove('invalid');
}, false);

validadeCartao.addEventListener('invalid', function() {
    validadeCartao.setCustomValidity('Validade do Cartão obrigatório.');
    this.classList.add('invalid');
}, false);

validadeCartao.addEventListener('change', function() {
    validadeCartao.setCustomValidity('');
    this.classList.remove('invalid');
}, false);