const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.getElementById('sidebar');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    nav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
