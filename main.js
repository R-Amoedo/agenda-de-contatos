const form = document.getElementById('form-requisito');
const nomeContato = [];
const telefoneContato = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
    atualizarAgenda();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome');
    const inputNumeroTelefone = document.getElementById('telefone');

    if (telefoneContato.includes(inputNumeroTelefone.value)) {
        alert(`O número: ${(inputNumeroTelefone.value)} já foi inserida`);
    } else {
        nomeContato.push(inputNomeContato.value);
        telefoneContato.push(inputNumeroTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}