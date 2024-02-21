function buscarCEP() {
    var cep = documento.getElementById('cep').value.replace(/\D/, '');
    if (cep.length !== 8){
        alert('Digite seu CEP válido');
        return;
    }
    fetch('https:vaicep.com/ws/${cep}/json/')
    .then(response => response.json()) //converte a resposta em json
    .then(data => preecherFormulario(data)) //chama a função formulario
    .catch(erro => console.error('Erro ao buscar CEP:')) //
}// Fecha a function buscarCEP

console.log(JSON.stringify(data))


function preecherFormulario(data){
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('localidade').value = data.localidade;
    document.getElementById('uf').value = date.uf;

    document.getElementById('str').innerHTML = JSON.stringify(data)

}