// Pobierz element nawigacyjny
const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navigation-icon');
const closeIcon = document.querySelector('.close-icon');
const mobNavigation = document.querySelector('.mobile-navigation');
const fullContent = document.querySelector('.full-content');
const typeOfInfo=document.querySelectorAll('.type-of-info');
const infoFlex=document.querySelectorAll('.info-flex');










document.addEventListener("DOMContentLoaded", () => {

    gsap.to('.kontakt-info h2',0,{opacity:0, y:50})
    gsap.to('.type-of-info',0,{opacity:0, x:-50})
    gsap.to(infoFlex,0,{opacity:0})
    gsap.to('.form-box',0,{opacity:0})
    gsap.to('.kontakt-description h2',0,{opacity:0})
    gsap.to('.kontakt-description article',0,{opacity:0})

    gsap.fromTo(".tittle-of-page h1",{opacity:0, y:-100},{opacity:1, y:0, duration:2, delay:0.5})
    gsap.fromTo(".tittle-of-page-ornament",{scale:0},{scale:1, duration:3, delay:2})
    gsap.fromTo(".tittle-of-page-article",{opacity:0},{opacity:1, delay:2, duration:1})

    gsap.registerPlugin(ScrollTrigger);

    // Przykładowa animacja
    gsap.to(".kontakt-description h2", {
      scrollTrigger: {
        trigger: ".kontakt-description h2", 
        start: "top 70%",
        markers: true,
      },
      opacity:1
    });

    gsap.to(".kontakt-description article", {
      scrollTrigger: {
        trigger: ".kontakt-description h2", 
        start: "top 70%",
        markers: true,
      },
      opacity:1
    });

    gsap.to(".form-box", {
      scrollTrigger: {
        trigger: ".kontakt-info-flex", 
        start: "top 80%",
        markers: true,
      },
      opacity:1       
    });
    gsap.to(".kontakt-info h2", {
      scrollTrigger: {
        trigger: ".kontakt-info-flex h2", 
        start: "top 85%",
        markers: true,
      },
      opacity:1,
      y:0,
      duration:1
    });

    typeOfInfo.forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
            },
            opacity:1,
            x:0,
            duration:1
        });
    });

    infoFlex.forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
            },
            opacity:1,
            duration:1
        });
    });



    let scrollPosition = 0;

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



