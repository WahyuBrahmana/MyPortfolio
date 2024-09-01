// Navbar-Fixed

window.onscroll = function () {

    const header = document.querySelector('header');
    
    //offsetTop
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }

  }

// Hamburger Menu and Nav Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function () {

    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

  });






//Control WIdth + hegiht on SVG Profile
  const width = window.innerWidth;
  const svgProfile = document.querySelector('#svg-profile');

  if (width>=1280) {
    svgProfile.setAttribute('height','600');
    svgProfile.setAttribute('width','600');
  }
  else 
  {
    svgProfile.setAttribute('height','400');
    svgProfile.setAttribute('width','400');
  }
  