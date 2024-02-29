fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro ao buscar os Dados:', error))