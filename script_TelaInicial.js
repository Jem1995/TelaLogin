//cadastro admin
let cadastrarAdmin = "true" ;
let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
listaUser.forEach((item) => {
  if(item.userCadastrado=="Admin"){
    cadastrarAdmin="false";
  }
});

if(cadastrarAdmin=="true"){ 
    
listaUser.push(
{
  userCadastrado: "Admin",
  passwordCadastrado: "Admin",
  nomeCadastrado: "Administrador",
  cidadeCadastrado: "Sem Cidade",
  emailCadastrado: "Sem email"
});   
localStorage.setItem('listaUser',JSON.stringify(listaUser));

};

// usado no botão de login, verifica se todas informações estão corretas, se sim, esconde a tela de login e mostra o display de informações do usuario
// se não, apresenta erro


function login() {
  let usuario = document.querySelector("#usuario");
  let userLabel = document.querySelector("#userLabel");

  let senha = document.querySelector("#senha");
  let senhaLabel = document.querySelector("#senhaLabel");

  let msgError = document.querySelector("#msgError");

  let container = document.querySelector("#container");
  let container2 = document.querySelector("#container2");
  
  let InfoNome = document.querySelector("#InfoNome");
  let InfoUser = document.querySelector("#InfoUser");
  let InfoPassword = document.querySelector("#InfoPassword");
  let InfoCidade = document.querySelector("#InfoCidade");
  let InfoEmail  = document.querySelector("#InfoEmail");
  
  
  let listaUser = [];

  let userValid = {
    nome: "",
    user: "",
    cidade: "",
    email: "",
    senha: ""
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));
  listaUser.forEach((item) => {
    if (
      usuario.value == item.userCadastrado &&
      senha.value == item.passwordCadastrado
    ) {
      userValid = {
        nome: item.nomeCadastrado,
        user: item.userCadastrado,
        senha: item.passwordCadastrado,
        cidade: item.cidadeCadastrado,
        email: item.emailCadastrado
      };
    }
  });

  if (
    usuario.value == userValid.user &&
    senha.value == userValid.senha &&
    usuario.value != ""
  ) {
    alert("Usuário logado com sucesso!");
    msgError.setAttribute("style", "display:none");
    
    userLabel.setAttribute("style", "color:default");
    usuario.setAttribute("style", "color:default");
    
    senhaLabel.setAttribute("style", "color:default");
    senha.setAttribute("style", "color:default");
    
    container.setAttribute("style", "display:none");
    container2.setAttribute("style", "display:flex");
    
    InfoNome.innerHTML = "<strong>Nome:</strong> "+userValid.nome;
    InfoUser.innerHTML = "<strong>User:</strong> "+userValid.user;
    InfoPassword.innerHTML = "<strong>Senha:</strong> "+userValid.senha;
    InfoCidade.innerHTML = "<strong>Cidade:</strong> "+userValid.cidade;
    InfoEmail.innerHTML = "<strong>E-mail:</strong> "+userValid.email;
    
  } else {
    alert("Usuário ou senha inválidos!");
    userLabel.setAttribute("style", "color:red");
    usuario.setAttribute("style", "color:red");
    senhaLabel.setAttribute("style", "color:red");
    senha.setAttribute("style", "color:red");
    msgError.setAttribute("style", "display:block");
    msgError.innerHTML = "Usuário ou senha inválidos!";
    usuario.focus();    
  }
  
}
function voltar() {
    msgError.setAttribute("style", "display:none");
    userLabel.setAttribute("style", "color:default");
    usuario.setAttribute("style", "color:default");
    senhaLabel.setAttribute("style", "color:default");
    senha.setAttribute("style", "color:default");
    container.setAttribute("style", "display:flex");
    container2.setAttribute("style", "display:none");
}



