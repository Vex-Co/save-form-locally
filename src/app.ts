const inputs = document.querySelectorAll('input');

for (let input of inputs) {
  input.addEventListener('change', () => {
    localStorage.setItem('lastname', input.value);
  });
}
