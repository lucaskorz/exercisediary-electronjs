window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  fetch(`https://exercisediary-94461-default-rtdb.firebaseio.com/Exercises/${id}.json`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('nome').value = data.nome;
      document.getElementById('carga').value = data.carga;
      document.getElementById('repeticoes').value = data.repeticoes;
      document.getElementById('series').value = data.series;
    })
    .catch(error => alert(error));
});

document.getElementById('save').addEventListener('click', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const nome = document.getElementById('nome').value;
  const carga = document.getElementById('carga').value;
  const repeticoes = document.getElementById('repeticoes').value;
  const series = document.getElementById('series').value;

  const exerciseData = {
    nome: nome,
    carga: carga,
    repeticoes: repeticoes,
    series: series
  };

  fetch(`https://exercisediary-94461-default-rtdb.firebaseio.com/Exercises/${id}.json`, {
    method: 'PATCH',
    body: JSON.stringify(exerciseData)
  })
    .then(response => {
      if (response.ok) {
        window.location.assign('../list/index.html')
      } else {
        alert('Falha ao atualizar o exercício.');
      }
    })
    .catch(error => alert(error));
})

document.getElementById('back').addEventListener('click', function() {
  window.location.assign('../list/index.html');
})