const btnForm = document.querySelector('button')
const pTextError = document.querySelector('.email-text')

btnForm.addEventListener('click', showText)

function showText() {
  pTextError.innerHTML = 'Hello you'
}

function validarForm(event) {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  if (!validarEmail(email)) {
    alert("Endereço de email inválido.");
    event.preventDefault(); // Impede o envio do formulário
  }
}

function validarEmail(email) {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

