const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche la fermeture immédiate
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});