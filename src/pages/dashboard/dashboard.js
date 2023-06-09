import { authenticateUser } from './auth.js'

document.getElementById('login-form').addEventListener('submit', function(event) {
  console.info('entrou')
  event.preventDefault();

  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  authenticateUser(username, password);
});
