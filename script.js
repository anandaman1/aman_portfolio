const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar'); // FIXED: using class selector

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
