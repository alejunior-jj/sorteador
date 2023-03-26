const nomes = [];

function adicionarNomes() {
  const nomesInseridos = document.getElementById('nomes').value;
  const nomesArray = nomesInseridos.split(/[\n,]+/); // separa nomes por vírgula ou quebra de linha
  nomesArray.forEach(function(nome) {
    if (nome.trim() !== '') {
      nomes.push(nome.trim());
    }
    else if (nomesInseridos.length === 0) {
        alert('Você não adicionou nenhum dado para sortear');
        return;
        }
  });
  document.getElementById('nomes').value = '';
  atualizarListaNomes();
}


function atualizarListaNomes() {
  const listaNomes = document.getElementById('lista-nomes');
  listaNomes.innerHTML = '';
  nomes.forEach(function(nome) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nome));
    listaNomes.appendChild(li);
  });
}

function sortear() {
  if (nomes.length === 0) {
    alert('Por favor, adicione pelo menos um nome pararealizar o sorteio');
    return;
    }
    const indiceVencedor = Math.floor(Math.random() * nomes.length);
    const nomeVencedor = nomes[indiceVencedor];
    document.getElementById('resultado').innerHTML = 'O vencedor é:'+ nomeVencedor;
    }
