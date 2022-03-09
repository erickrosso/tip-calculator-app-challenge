var valor = document.querySelector("#valor");
var total = document.querySelector(".totalPersonD");
var pessoas = document.querySelector("#pessoas");
var btPorcentagem = document.querySelectorAll(".buttom");
var tipAmount = document.querySelector(".totalPersonU");
var custom = document.querySelector("#custom");
var resetar = document.querySelector(".reset");
var qtPessoas = 1;
var copy = 0;
var porcentagem = 0;

valor.addEventListener("input", copiar);
pessoas.addEventListener("input", copiarPessoas);
custom.addEventListener("input", porcentCustom);
resetar.addEventListener("click", limpar);


function attTotal() {
    total.innerText = "$" + (copy * (1 + parseFloat(porcentagem)) / qtPessoas).toFixed(2);
    tipAmount.innerText ="$" + (copy * parseFloat(porcentagem) / qtPessoas).toFixed(2);
};

function copiar() {
    copy = valor.value;
    attTotal()
};

function copiarPessoas() {
    qtPessoas = pessoas.value;
    attTotal()
};

function porcent() {
    porcentagem = this.value;
    attTotal()
};

function porcentCustom() {
    porcentagem = this.value / 100;
    attTotal()
};

btPorcentagem.forEach((x, y, z) => {
    btPorcentagem[y].addEventListener("click", porcent);
});

function limpar() {
    valor.value = "";
    pessoas.value = "";
    custom.value = "";

    qtPessoas = 1;
    copy = 0;
    porcentagem = 0;

    attTotal()
};