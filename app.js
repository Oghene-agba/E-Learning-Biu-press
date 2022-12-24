//Navigation scroll
window.addEventListener('scroll', () =>{
    if (window.scrollY >= 80) {
        document.querySelector('header').classList.add('scroll');
    }else {
      document.querySelector('header').classList.remove('scroll');
    }
  });

//Toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


