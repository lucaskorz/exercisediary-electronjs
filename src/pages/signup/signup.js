const saveButton = document.getElementById('saveBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

saveButton.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVi3kH0_20zBAU8ca_eQOVwW6uglaOvkg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      })
    });

    const data = await response.json();

    if (response.ok) {
      window.location.assign('../dashboard/index.html');
    } else {
      errorMessage.textContent = data.error.message;
    }
  } catch (error) {
    errorMessage.textContent = 'Erro ao criar usuário: ' + error;
  }
});

document.getElementById('backToLogin').addEventListener('click', function() {
  window.location.assign('../login/index.html');
})