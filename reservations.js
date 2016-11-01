var locColEl = document.getElementById('locCol');
var nameEl = document.getElementById('nom');
var ageEl = document.getElementById('anos');
var genderEl = document.getElementById('genero');
var genderTextEl = document.getElementById('genderText');
var phoneEl = document.getElementById('telefono');
var emailEl = document.getElementById('correo');
var dateEl = document.getElementById('fecha');
var partyEl = document.getElementById('personas');
var petsEl = document.getElementById('mascotas');
var notesEl = document.getElementById('notas');
var formSubmitEl = document.getElementById('formSubmit');


nameEl.setAttribute('placeholder', 'What\'s your name?');
ageEl.setAttribute('placeholder', 'How old are you?');
genderTextEl.setAttribute('placeholder', 'Gender identity?');
phoneEl.setAttribute('placeholder', 'Where can we reach you?')
emailEl.setAttribute('placeholder', 'Where can we reach you?')
partyEl.setAttribute('placeholder', 'Including yourself!');

formSubmitEl.addEventListener('click', 'validateForm');

function validateForm() {
  if (nameEl === '') {
    nameEl.setAttribute('placeholder', 'Please enter your name.');
  }
  else if (ageEl === '') {
    ageEl.setAttribute('placeholder', 'Please enter your age.');
  else if ()

  }

function validateForm() {
  switch {
    case (nameEl === ''):
      nameEl.setAttribute('placeholder', 'Please enter your name.');
    case (ageEl === ''):
      ageEl.setAttribute('placeholder', 'Please enter your age.');
  }
}


}




// TODO if everything is good, [action="confirmation.js" method="get"]
