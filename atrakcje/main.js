// Pobierz element nawigacyjny
const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navigation-icon');
const closeIcon = document.querySelector('.close-icon');
const mobNavigation = document.querySelector('.mobile-navigation');
const fullContent = document.querySelector('.full-content');
const detailedDescriptionBox=document.querySelectorAll('.detailed-description-box')
const detailedDescriptionBoxP=document.querySelectorAll('.detailed-description-box p')
const detailedDescriptionBoxArticle=document.querySelectorAll('.detailed-description-box article')
const detailedDescriptionBoxImg=document.querySelectorAll('.detailed-description-box img')


const bgImage = new Image();
bgImage.src = "../img/Atrakcje-header.webp";
bgImage.onload = function() {
    document.getElementById("loader").classList.add("hidden");
    document.querySelector(".full-content").classList.remove("hidden");
    document.querySelector("header").classList.add("loaded");
};
let scrollPosition = 0;
document.addEventListener("DOMContentLoaded", () => {

  gsap.to('.atrakcje-description h2',0,{opacity:0})
  gsap.to('.atrakcje-description article',0,{opacity:0})
  gsap.to(detailedDescriptionBox,0,{x:"-100%", opacity:0})
  gsap.to(detailedDescriptionBoxP,0,{y:-100, opacity:0})
  gsap.to(detailedDescriptionBoxArticle,0,{ opacity:0})
  gsap.to(detailedDescriptionBoxImg,0,{ opacity:0, scale:0.8})

  gsap.fromTo(".tittle-of-page h1",{opacity:0, y:-100},{opacity:1, y:0, duration:2, delay:0.5})
  gsap.fromTo(".tittle-of-page-ornament",{scale:0},{scale:1, duration:3, delay:2})
  gsap.fromTo(".tittle-of-page-article",{opacity:0},{opacity:1, delay:2, duration:1})

  gsap.registerPlugin(ScrollTrigger);

    // Przykładowa animacja
    gsap.to(".atrakcje-description h2", {
      scrollTrigger: {
        trigger: ".atrakcje-description h2", 
        start: "top 70%"
      },
      opacity:1
    });

    gsap.to(".atrakcje-description article", {
      scrollTrigger: {
        trigger: ".atrakcje-description h2", 
        start: "top 70%"
      },
      opacity:1
    });

    detailedDescriptionBox.forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
            },
            opacity:1,
            x:0,
            duration:1
        });
    });
    detailedDescriptionBoxP.forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
            },
            opacity:1,
            y:0,
            duration:1
        });
    });
    detailedDescriptionBoxArticle.forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
            },
            opacity:1,
            duration:1,
            delay:0.5
        });
    });
    detailedDescriptionBoxImg.forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
            },
            opacity:1,
            scale:1,
            duration:1,
            delay:1
        });
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
