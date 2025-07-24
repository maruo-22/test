const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}