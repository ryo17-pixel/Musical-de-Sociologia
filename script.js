const playButtons = document.querySelectorAll('.play');

playButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');

    playButtons.forEach((item) => {
      item.classList.remove('active');
      item.textContent = '▶';
    });

    if (!isActive) {
      button.classList.add('active');
      button.textContent = 'Ⅱ';
    }
  });
});
