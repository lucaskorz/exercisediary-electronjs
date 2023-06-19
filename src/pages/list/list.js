window.addEventListener('load', function() {
  fetch('https://exercisediary-94461-default-rtdb.firebaseio.com/Exercises/.json')
    .then(response => response.json())
    .then(data => {
      const exerciseGrid = document.getElementById('exercise-grid');

      Object.keys(data).forEach(id => {
        if (data[id] !== null) {
          const exercise = data[id];
          const gridItem = document.createElement('div');
          gridItem.className = 'grid-item';
          gridItem.innerHTML = `
            <h2>${exercise.nome}</h2>
            <p>Carga: ${exercise.carga}</p>
            <p>Repetições: ${exercise.repeticoes}</p>
            <p>Séries: ${exercise.series}</p>
          `;
          
          const editCell = document.createElement('div');
          editCell.className = 'exercise-cell';
          const editButton = document.createElement('button');
          editButton.className = 'edit-button';
          editButton.textContent = 'Editar';
          editButton.addEventListener('click', () => {
            editExercise(id);
          });
          editCell.appendChild(editButton);
          gridItem.appendChild(editCell);

          const deleteCell = document.createElement('div');
          deleteCell.className = 'exercise-cell';
          const deleteButton = document.createElement('button');
          deleteButton.className = 'delete-button';
          deleteButton.textContent = 'Excluir';
          deleteButton.addEventListener('click', () => {
            deleteExercise(id);
          });
          deleteCell.appendChild(deleteButton);
          gridItem.appendChild(deleteCell);

          exerciseGrid.appendChild(gridItem);
        }
      });
    })
    .catch(error => alert(error));

    function editExercise(id) {
      const params = new URLSearchParams();
      params.set('id', id);
      window.location.assign(`../edit/index.html?${params.toString()}`);
    }

    function deleteExercise(id) {
      fetch(`https://exercisediary-94461-default-rtdb.firebaseio.com/Exercises/${id}.json`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          window.location.reload()
        } else {
          alert('Falha ao excluir o exercício.');
        }
      })
      .catch(error => alert(error));
  }
});

document.getElementById('back').addEventListener('click', function() {
  window.location.assign('../dashboard/index.html');
})