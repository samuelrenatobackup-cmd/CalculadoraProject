let vazio = '';

let result = document.getElementById('resultado');

function insert(x) {
vazio += x;
result.innerHTML = vazio;
}

function limpar() {
vazio = '';
result.innerHTML = vazio;
}

function parenteses(x) {
insert(x);
}

function porcentagem(x) {
insert(x);
}

function dividir(x) {
insert(x);
}

function multiplicar(x) {
insert(x);
}

function subtrair(x) {
insert(x);
}

function adicao(x) {
insert(x);
}

function virgula(x) {
vazio += '.';
result.innerHTML = vazio;
}

function apagar() {
vazio = vazio.slice(0, -1);
result.innerHTML = vazio;
}

function soma() {
try {
vazio = eval(vazio);
result.innerHTML = vazio;
} catch {
vazio = '';
result.innerHTML = 'Erro';
}
}
