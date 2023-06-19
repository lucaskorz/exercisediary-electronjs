const errorMessage = document.getElementById('errorMessage');

export const authenticateUser = async (email, password) => {
  try {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVi3kH0_20zBAU8ca_eQOVwW6uglaOvkg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    });

    if (!response.ok) {
      errorMessage.textContent = 'Usuário ou senha incorretos.';
    }

    const data = await response.json();
    const accessToken = data.idToken;

    if (accessToken) window.location.assign('../dashboard/index.html');
  } catch (error) {
    errorMessage.textContent = 'Usuário ou senha incorretos.';
    window.location.reload();
  }
};