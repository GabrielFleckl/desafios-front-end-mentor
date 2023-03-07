function validarForm(event) {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  if (!validarEmail(email)) {
    alert("Endereço de email inválido.");
    event.preventDefault()
  }
}

function validarEmail(email) {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

validarForm()
