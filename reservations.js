

function formValidation() {
  document.getElementById(formSubmit).addEventListener('click', requiredInput);
}

function requiredInput() {
  var form = document.getElementById(resForm);
  var nameInput = document.getElementById(nom);
  if (nameInput.name === '') {
    nameInput.setAttribute('placeholder', 'Please fill out this field.');
    return false;
  }
}

formValidation();
