const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navbar-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.height = "70px";
    document.getElementById("navbar-img").style.height = "50px";
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("navbar-img").style.height = "70px";
  }
}


// typed js

const typed = new Typed('.multiple-text', {
  strings: ['Lærer- og SFO vikar', 'Gymnast', 'Gymnastik Instruktør'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});