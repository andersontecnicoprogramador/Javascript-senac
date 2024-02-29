function buscarCEP() {
    var cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert('Digite um CEP válido');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => preencherFormulario(data))
        .catch(error => console.error('Erro ao buscar CEP:', error));
}

function preencherFormulario(data) {
    document.getElementById('logradouro').value = data.logradouro || '';
    document.getElementById('bairro').value = data.bairro || '';
    document.getElementById('localidade').value = data.localidade || '';
    document.getElementById('uf').value = data.uf || '';
}