// Importe a função de autenticação (exemplo)
const { authenticateUser } = require('../../utils/auth');
const log = require('electron-log');

document.getElementById('login-form').addEventListener('submit', function(event) {
  log.info('entrou')
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  authenticateUser(username, password);
});
