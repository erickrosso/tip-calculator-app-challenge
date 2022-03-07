var valor = document.querySelector("#valor");
var total = document.querySelector(".totalPersonD");
var pessoas = document.querySelector("#pessoas");
var btPorcentagem = document.querySelectorAll(".buttom");
var tipAmount = document.querySelector(".totalPersonU");
var qtPessoas = 1;
var copy = 0;
var porcentagem = 0;

valor.addEventListener("input", copiar);
pessoas.addEventListener("input", copiarPessoas);



setInterval(attTotal, 1000);

function attTotal() {
    total.innerText = "$" + (copy * (1 + parseFloat(porcentagem)) / qtPessoas);
    tipAmount.innerText ="$" + (copy * parseFloat(porcentagem) / qtPessoas);
};

function copiar() {
    copy = valor.value;
};

function copiarPessoas() {
    qtPessoas = pessoas.value;
};

function porcent() {
    porcentagem = this.value;
};

btPorcentagem.forEach((x, y, z) => {
    btPorcentagem[y].addEventListener("click", porcent);
});