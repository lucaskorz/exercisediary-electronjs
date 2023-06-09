document.getElementById('view-exercises-btn').addEventListener('click', function(event) {
  event.preventDefault();

  window.location.assign('../list/index.html');
});

document.getElementById('create-exercise-btn').addEventListener('click', function(event) {
  event.preventDefault();

  window.location.assign('../save/index.html');
});

document.getElementById('logout-btn').addEventListener('click', function(event) {
  event.preventDefault();

  window.location.assign('../login/index.html');
});
