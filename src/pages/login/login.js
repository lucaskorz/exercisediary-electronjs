import { authenticateUser } from './auth.js'

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  authenticateUser(username, password);
});

document.getElementById('signup').addEventListener('click', function() {
  window.location.assign('../signup/index.html');
})

document.getElementById('redefinir').addEventListener('click', function() {
  window.location.assign('../redefinir-senha/index.html');
})