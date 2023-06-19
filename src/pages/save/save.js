document.getElementById('save').addEventListener('click', function () {
  const nome = document.getElementById('nome').value;
  const carga = document.getElementById('carga').value;
  const repeticoes = document.getElementById('repeticoes').value;
  const series = document.getElementById('series').value;

  if (!nome || !carga || !repeticoes || !series) {
    alert('Todos os campos são obrigatórios.')
    return;
  }

  const exerciseData = {
    nome: nome,
    carga: carga,
    repeticoes: repeticoes,
    series: series
  };

  fetch('https://exercisediary-94461-default-rtdb.firebaseio.com/Exercises.json', {
    method: 'POST',
    body: JSON.stringify(exerciseData)
  })
    .then(response => {
      if (response.ok) {
        window.location.assign('../list/index.html');
      } else {
        alert('Falha ao salvar o exercício.');
      }
    })
    .catch(error => alert(error));
})

document.getElementById('back').addEventListener('click', function() {
  window.location.assign('../dashboard/index.html');
})