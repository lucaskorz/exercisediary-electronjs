const axios = require('axios');
const log = require('electron-log');

async function authenticateUser(email, password) {
  try {
    const response = await axios.post(process.env.URL_FIREBASE, {
      email,
      password,
      returnSecureToken: true
    });

    log.info(response)

    const accessToken = response.data.idToken;

    log.info(accessToken)
    log.info('Usuário autenticado com sucesso!');
  } catch (error) {
    log.info('Erro ao autenticar usuário:', error.response.data.error);
  }
}


