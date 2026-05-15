window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = '30px 10px';
    logo.style.fontSize = '25px';
  } else {
    navbar.style.padding = '60px 10px';
    logo.style.fontSize = '35px';
  }
}