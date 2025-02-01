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

//content
const domkiDescriptionFlexI3=document.querySelectorAll('.domki-description-flex .i3-images div')
const domkiDescriptionFlexI2=document.querySelectorAll('.domki-description-flex .i2-images div')



let scrollPosition = 0;
document.addEventListener("DOMContentLoaded", () => {

    gsap.fromTo(".tittle-of-page h1",{opacity:0, y:-100},{opacity:1, y:0, duration:2, delay:0.5})
    gsap.fromTo(".tittle-of-page-ornament",{scale:0},{scale:1, duration:3, delay:2})
    gsap.fromTo(".tittle-of-page-article",{opacity:0},{opacity:1, delay:2, duration:1})

    gsap.to('.atrakcje-description h2',0,{opacity:0})
    gsap.to('.atrakcje-description article',0,{opacity:0})

    gsap.to(domkiDescriptionFlexI3[0],0,{opacity:0,x:-150})
    gsap.to(domkiDescriptionFlexI3[1],0,{opacity:0,x:150})
    gsap.to(domkiDescriptionFlexI3[2],0,{opacity:0,x:-150})

    gsap.to(domkiDescriptionFlexI2[0],0,{opacity:0,x:-150})
    gsap.to(domkiDescriptionFlexI2[1],0,{opacity:0,x:150})

    gsap.to('.description.main h2',0,{opacity:0})
    gsap.to('.description.main article',0,{opacity:0})
    gsap.to('.description.sub article',0,{opacity:0})
    gsap.to('.offer-con h3',0,{opacity:0,y:-40})
    
    gsap.to('.offer-1',0,{opacity:0,scale:0.9})
    gsap.to('.offer-2',0,{opacity:0,scale:0.9})


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
    gsap.to(domkiDescriptionFlexI3[0],{
        scrollTrigger:{
            trigger: domkiDescriptionFlexI3[0],
            start:"top 80%"
        },
        opacity:1,
        x:0
    });
    gsap.to(domkiDescriptionFlexI3[1],{
        scrollTrigger:{
            trigger: domkiDescriptionFlexI3[1],
            start:"top 80%"
        },
        opacity:1,
        x:0
    });
    gsap.to(domkiDescriptionFlexI3[2],{
        scrollTrigger:{
            trigger: domkiDescriptionFlexI3[2],
            start:"top 80%"
        },
        opacity:1,
        x:0
    });
    gsap.to('.description.main h2',{
        scrollTrigger:{
            trigger: '.description.main',
            start:"top 80%"
        },
        opacity:1,
        duration:2
    });
    gsap.to('.description.main article',{
        scrollTrigger:{
            trigger: '.description.main',
            start:"top 80%"
        },
        opacity:1,
        duration:3
    });

    gsap.to(domkiDescriptionFlexI2[0],{
        scrollTrigger:{
            trigger: domkiDescriptionFlexI2[0],
            start:"top 80%"
        },
        opacity:1,
        x:0,
        duration:3
    });
    gsap.to(domkiDescriptionFlexI2[1],{
        scrollTrigger:{
            trigger: domkiDescriptionFlexI2[0],
            start:"top 80%"
        },
        opacity:1,
        x:0,
        duration:3
    });
    gsap.to('.description.sub article',{
        scrollTrigger:{
            trigger: '.description.sub',
            start:"top 80%"
        },
        opacity:1,
        duration:2
    });
    gsap.to('.offer-con h3',{
        scrollTrigger:{
            trigger: '.offer-con',
            start:"top 80%"
        },
        opacity:1,
        y:0
    });
    gsap.to('.offer-1',{
        scrollTrigger:{
            trigger: '.offer',
            start:"top 80%"
        },
        opacity:1,
        scale:1,
        duration:1
    });
    gsap.to('.offer-2',{
        scrollTrigger:{
            trigger: '.offer',
            start:"top 80%"
        },
        opacity:0.8,
        scale:0.9,
        duration:1,
        delay:1
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
    
});

