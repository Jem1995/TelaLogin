let user = document.getElementById("user");
let labelUser = document.querySelector("#labelUser");
let validUser = false;

let password = document.querySelector("#password");
let labelPassword = document.querySelector("#labelPassword");
let validPassword = false;

let ConfirmarPassword = document.querySelector("#ConfirmarPassword");
let labelConfirmarPassword = document.querySelector("#labelConfirmarPassword");
let validConfirmarPassword = false;

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let cidade = document.querySelector("#cidade");
let labelCidade = document.querySelector("#labelCidade");
let validCidade = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red","size: 20px");
    labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

user.addEventListener("keyup", () => {
  if (user.value.length <= 4) {
    labelUser.setAttribute("style", "color: red");
    labelUser.innerHTML = "User *Insira no minimo 5 caracteres";
    user.setAttribute("style", "border-color: red");
    validUser = false;
  } else {
    labelUser.setAttribute("style", "color: green");
    labelUser.innerHTML = "User";
    user.setAttribute("style", "border-color: green");
    validUser = true;
  }
});

password.addEventListener("keyup", () => {
  if (password.value.length <= 5) {
    labelPassword.setAttribute("style", "color: red");
    labelPassword.innerHTML = "User *Insira no minimo 6 caracteres";
    password.setAttribute("style", "border-color: red");
    validPassword = false;
  } else {
    labelPassword.setAttribute("style", "color: green");
    labelPassword.innerHTML = "User";
    password.setAttribute("style", "border-color: green");
    validPassword = true;
  }
});

ConfirmarPassword.addEventListener("keyup", () => {
  if (password.value != ConfirmarPassword.value) {
    labelConfirmarPassword.setAttribute("style", "color: red");
    labelConfirmarPassword.innerHTML =
      "Confirmar Password *As senhas não conferem";
    ConfirmarPassword.setAttribute("style", "border-color: red");
    validConfirmarPassword = false;
  } else {
    labelConfirmarPassword.setAttribute("style", "color: green");
    labelConfirmarPassword.innerHTML = "Confirmar Password";
    ConfirmarPassword.setAttribute("style", "border-color: green");
    validConfirmarPassword = true;
  }
});

cidade.addEventListener("keyup", () => {
  labelCidade.setAttribute("style", "color: green");
  cidade.setAttribute("style", "border-color: green");
  validCidade = true;
});
email.addEventListener("keyup", () => {
  labelEmail.setAttribute("style", "color: green");
  email.setAttribute("style", "border-color: green");
  validEmail = true;
});

function cadastro() {
  if (
    validUser &&
    validEmail &&
    validCidade &&
    validNome &&
    validConfirmarPassword &&
    validPassword
  ) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
    
    listaUser.push(
    {
      userCadastrado: user.value,
      passwordCadastrado: password.value,
      nomeCadastrado: nome.value,
      cidadeCadastrado: cidade.value,
      emailCadastrado: email.value
           
    });
    
    localStorage.setItem('listaUser',JSON.stringify(listaUser));
    
    
    msgSuccess.setAttribute("style", "display:block");
    msgSuccess.innerHTML = "<strong>Cadastrando...</strong>";
    msgError.innerHTML = "";
    msgError.setAttribute("style", "display:none");
    
    setTimeout(()=>{
      window.location.href = 'index_TelaInicial.html';
    },2000); 
    
    } else {
    msgError.setAttribute("style", "display:block");
    msgError.innerHTML = "<strong>Há campos não preenchidos...</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display:none");
  }
}