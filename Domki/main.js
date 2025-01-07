// Pobierz element nawigacyjny
const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navigation-icon');
const closeIcon = document.querySelector('.close-icon');
const mobNavigation = document.querySelector('.mobile-navigation');
const fullContent = document.querySelector('.full-content');

//domki
const przyciskOffer1 = document.querySelector('.offer-1');
const przyciskOffer2 = document.querySelector('.offer-2');
const zawartoscOffer1 = document.querySelector('.offer-1-con');
const zawartoscOffer2 = document.querySelector('.offer-2-con');



przyciskOffer1.addEventListener('click',()=>{
    if (przyciskOffer1.classList.contains('active')){
        console.log('działa')
    }
    else{
        przyciskOffer2.classList.remove('active')
        przyciskOffer1.classList.add('active')
        zawartoscOffer2.classList.remove('active')
        zawartoscOffer1.classList.add('active')
    }
})
przyciskOffer2.addEventListener('click',()=>{
    if (przyciskOffer2.classList.contains('active')){
        console.log('działa')
    }
    else{
        przyciskOffer1.classList.remove('active')
        przyciskOffer2.classList.add('active')
        zawartoscOffer1.classList.remove('active')
        zawartoscOffer2.classList.add('active')
    }
})







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