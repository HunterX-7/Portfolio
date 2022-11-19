function toggle() {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementsByClassName('close-icon')[0];
  const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
}

document.getElementById('hamburger-icon').addEventListener('click', toggle);
document.getElementsByClassName('close-icon')[0].addEventListener('click', toggle);
document.getElementsByClassName('mobile-menu')[0].addEventListener('click', toggle);

document.querySelector('.check').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const lower = email.toLowerCase();
  if ((email === lower) !== true) {
    e.preventDefault();
    error.innerHTML = '<div class="input-fields-error">Your email address needs to be lowercase!</div>';
  }
});

// Preserve data in the browser

document.addEventListener('change', () => {
  const nombre = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const data = {
    nombre: nombre.value,
    email: email.value,
    message: message.value,
  };
  const dataStr = JSON.stringify(data);

  localStorage.setItem('data', dataStr);
});

document.addEventListener('DOMContentLoaded', () => {
  const dataUnstr = JSON.parse(localStorage.getItem('data'));
  document.getElementById('name').value = dataUnstr.nombre;
  document.getElementById('email').value = dataUnstr.email;
  document.getElementById('message').value = dataUnstr.message;
});