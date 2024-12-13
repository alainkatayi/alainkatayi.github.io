var burger = document.getElementById("burger");

const menu = document.getElementById('menu');

burger.addEventListener('click' , () => {
    menu.classList.toggle('active');
} );


const menuLinks = document.querySelectorAll('.menu a')

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });