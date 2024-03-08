  let form = document.getElementById("formualrio")
  let error = document.getElementById("error")
    
  form.addEventListener("submit" ,function (event) {
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value
    
   // alert(login +" "+ senha)
    validarLogin(login, senha)
  })

  function validarLogin(login,senha){
    if(login == 'user' && senha == '123'){
      localStorage.setItem('acessorestrito',true)
      window.location.href= 'admin/h'
      //alert('acessorestrito')
    } else {
     error.innerHTML = "Login ou senha Invalido"

  }

}

function sair (){
  alert('sair')
}
    