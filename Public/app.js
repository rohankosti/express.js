// Plain (non-module) JS
document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const greetArea = document.getElementById('greetArea');

  greetBtn.addEventListener('click', function () {
    const name = (nameInput.value || '').trim();
    if (!name) {
      greetArea.textContent = 'Please enter your name first.';
      greetArea.style.color = '#b91c1c';
      return;
    }
    greetArea.style.color = ''; // reset
    greetArea.textContent = `Hello, ${name}! 👋 Welcome to your Express app.`;
  });
  nameInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') greetBtn.click();
  });
});
