// Pobierz element nawigacyjny
const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navigation-icon');
const closeIcon = document.querySelector('.close-icon');
const mobNavigation = document.querySelector('.mobile-navigation');
const fullContent = document.querySelector('.full-content');



let scrollPosition = 0;
$(document).ready(function(){

  gsap.to('.galeria-description h2',0,{opacity:0})
  gsap.to('.galeria-description article',0,{opacity:0})

  gsap.fromTo(".tittle-of-page h1",{opacity:0, y:-100},{opacity:1, y:0, duration:2, delay:0.5})
  gsap.fromTo(".tittle-of-page-ornament",{scale:0},{scale:1, duration:3, delay:2})
  gsap.fromTo(".tittle-of-page-article",{opacity:0},{opacity:1, delay:2, duration:1})

  gsap.registerPlugin(ScrollTrigger);

    // Przykładowa animacja
    gsap.to(".galeria-description h2", {
      scrollTrigger: {
        trigger: ".galeria-description h2", 
        start: "top 70%",
        markers: true,
      },
      opacity:1
    });

    gsap.to(".galeria-description article", {
      scrollTrigger: {
        trigger: ".galeria-description h2", 
        start: "top 70%",
        markers: true,
      },
      opacity:1
    });



















    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
                enabled:true
            },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });

    // Zablokowanie przewijania
function disableScroll() {
  scrollPosition = window.pageYOffset;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}

// Odblokowanie przewijania
function enableScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
}

// Dodaj nasłuchiwanie na zdarzenie przewijania strony
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

navIcon.addEventListener('click',()=>{
    navIcon.classList.add('sleeping');
    mobNavigation.classList.remove('sleeping')
    disableScroll(); // Zablokuj
})
closeIcon.addEventListener('click',()=>{
    navIcon.classList.remove('sleeping');
    mobNavigation.classList.add('sleeping')
    enableScroll();  // Odblokuj
    
})
    
    });
