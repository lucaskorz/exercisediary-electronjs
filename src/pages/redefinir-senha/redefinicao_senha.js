const resetPasswordBtn = document.getElementById('resetPasswordBtn');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

resetPasswordBtn.addEventListener('click', async () => {
  const email = emailInput.value;

  try {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDVi3kH0_20zBAU8ca_eQOVwW6uglaOvkg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requestType: 'PASSWORD_RESET',
        email: email
      })
    });

    const data = await response.json();

    if (response.ok) {
      alert('E-mail de redefinição de senha enviado com sucesso!');
    } else {
      errorMessage.textContent = data.error.message;
    }
  } catch (error) {
    errorMessage.textContent = 'Erro ao enviar e-mail de redefinição de senha: ' + error;
  }
});

document.getElementById('returnToLogin').addEventListener('click', function() {
  window.location.assign('../login/index.html');
})