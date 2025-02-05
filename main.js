// Pobierz element nawigacyjny
const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navigation-icon');
const closeIcon = document.querySelector('.close-icon');
const mobNavigation = document.querySelector('.mobile-navigation');
const fullContent = document.querySelector('.full-content');
const zdjDomek = document.querySelectorAll('.opis-domki-domek');
const infoDomek = document.querySelectorAll('.info-opis-domki');
const atrakcje = document.querySelectorAll('.atrakcja');


//content
window.addEventListener("load", function() {
    document.getElementById("loader").classList.add("hidden");
    document.querySelector(".full-content").classList.remove("hidden");
});

let scrollPosition = 0;
document.addEventListener("DOMContentLoaded", () => {

    gsap.fromTo(".tittle-of-page", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 2, delay: 0.5 })
    gsap.fromTo(".tittle-of-page-ornament", { scale: 0 }, { scale: 1, duration: 3, delay: 2 })
    gsap.fromTo(".tittle-of-page-article", { opacity: 0 }, { opacity: 1, delay: 2, duration: 1 })
    gsap.fromTo(".tittle-of-page-button", { opacity: 0 }, { opacity: 1, delay: 9, duration: 1 })

    gsap.to('.krotki-opis-bukowinki h2', 0, { opacity: 0, y: -100 })
    gsap.to('.krotki-opis-bukowinki article', 0, { opacity: 0 })
    gsap.to('.img-o-nas', 0, { opacity: 0, scale: 0.5, x: -150 })
    gsap.to('.opis-o-nas h3', 0, { opacity: 0, y: -100 })
    gsap.to('.opis-o-nas article', 0, { opacity: 0 })
    gsap.to('.opis-o-nas a', 0, { opacity: 0 })
    gsap.to(infoDomek[1], 0, { opacity: 0 })
    gsap.to(infoDomek[2], 0, { opacity: 0 })
    gsap.to(".spedzanie-czasu h5", 0, { opacity: 0, color:"#e9e9e9"})
    atrakcje.forEach((elem)=>{
        gsap.to(elem,0,{opacity:0})
    })
    gsap.to(".mazury", 0, { scaleY: 0 })
    gsap.to(".mazury h6", 0, { opacity:0 })
    gsap.to(".mazury-img", 0, { scaleY: 0, opacity: 0 })
    gsap.to(".mazury-opis", 0, { scaleY: 0, opacity: 0 })

    const article = document.querySelector('.tittle-of-page-article article');
    const text = article.textContent; // Pobranie pełnego tekstu
    article.textContent = ''; // Wyczyszczenie tekstu z widoku
    article.style.visibility = 'visible'; // Ustawienie widoczności elementu

    let index = 0;

    const typeWriter = () => {
        if (index < text.length) {
            article.textContent += text[index]; // Dodawanie kolejnej litery
            index++;
            setTimeout(typeWriter, 30); // Ustaw prędkość animacji (50ms na literę)
        }
    };

    typeWriter(); // Rozpocznij animację



    gsap.registerPlugin(ScrollTrigger);

    // Przykładowa animacja
    gsap.to(".atrakcje-description h2", {
        scrollTrigger: {
            trigger: ".atrakcje-description h2",
            start: "top 70%"
        },
        opacity: 1
    });

    gsap.to(".atrakcje-description article", {
        scrollTrigger: {
            trigger: ".atrakcje-description h2",
            start: "top 70%"
        },
        opacity: 1
    });
    gsap.to(".krotki-opis-bukowinki h2", {
        scrollTrigger: {
            trigger: ".krotki-opis-bukowinki h2",
            start: "top 80%"
        },
        opacity: 1,
        y: 0,
        duration: 1
    });
    gsap.to(".krotki-opis-bukowinki article", {
        scrollTrigger: {
            trigger: ".krotki-opis-bukowinki article",
            start: "top 80%"
        },
        opacity: 1,
        duration: 1
    });
    gsap.to(".img-o-nas", {
        scrollTrigger: {
            trigger: ".img-o-nas",
            start: "top 80%"
        },
        opacity: 1,
        scale: 1,
        duration: 2,
        x: 0
    });
    gsap.to(".opis-o-nas h3", {
        scrollTrigger: {
            trigger: ".opis-o-nas h3",
            start: "top 80%"
        },
        opacity: 1,
        y: 0,
        duration: 1
    });
    gsap.to(".opis-o-nas article", {
        scrollTrigger: {
            trigger: ".opis-o-nas article",
            start: "top 80%"
        },
        opacity: 1,
        duration: 1
    });
    gsap.to(".opis-o-nas a", {
        scrollTrigger: {
            trigger: ".opis-o-nas a",
            start: "top 80%"
        },
        opacity: 1,
        duration: 1
    });
    gsap.to(zdjDomek[0], {
        scrollTrigger: {
            trigger: zdjDomek[0],
            start: "top 70%",
            onEnter: () => zdjDomek[0].classList.add("active"),
            once: true
        }
    });
    gsap.to(zdjDomek[1], {
        scrollTrigger: {
            trigger: zdjDomek[1],
            start: "top 70%",
            onEnter: () => zdjDomek[1].classList.add("active"),
            once: true
        }
    });
    gsap.to(zdjDomek[2], {
        scrollTrigger: {
            trigger: zdjDomek[2],
            start: "top 70%",
            onEnter: () => zdjDomek[2].classList.add("active"),
            once: true
        }
    });
    gsap.to(zdjDomek[0], {
        scrollTrigger: {
            trigger: zdjDomek[0],
            start: "top 30%",
            onEnter: () => zdjDomek[0].classList.add("active2"),
            once: true
        }
    });
    gsap.to(zdjDomek[1], {
        scrollTrigger: {
            trigger: zdjDomek[1],
            start: "top 30%",
            onEnter: () => zdjDomek[1].classList.add("active2"),
            once: true
        }
    });
    gsap.to(zdjDomek[2], {
        scrollTrigger: {
            trigger: zdjDomek[2],
            start: "top 30%",
            onEnter: () => zdjDomek[2].classList.add("active2"),
            once: true
        }
    });
    gsap.to(infoDomek[1], {
        scrollTrigger: {
            trigger: infoDomek[1],
            start: "top 70%"
        },
        opacity: 1,
        duration: 0.3
    });
    gsap.to(infoDomek[2], {
        scrollTrigger: {
            trigger: infoDomek[2],
            start: "top 30%"
        },
        opacity: 1,
        duration: 0.3
    });
    
    gsap.to(".spedzanie-czasu h5", {
        scrollTrigger: {
            trigger: ".spedzanie-czasu h5",
            start: "top 80%"
        },
        color:"#0F2F2A",
        opacity: 1,
        duration: 0.3
    });
    
    atrakcje.forEach((elem) =>{
        gsap.to(elem,{
            scrollTrigger:{
                trigger:elem,
                start: 'top 80%'
            },
            opacity:1,
            duration:0.3,
            delay:0.3
        })
    })
    gsap.to(".mazury",{
        scrollTrigger:{
            trigger:".mazury",
            start: "top 80%"
        },
        scaleY:1,
        duration:0.5
    })

    gsap.to('.mazury h6',{
        scrollTrigger:{
            trigger:".mazury",
            start:"top 80%"
        },
        opacity:1,
        duration:0.3,
        delay:0.5
    })
    gsap.to('.mazury-img',{
        scrollTrigger:{
            trigger:".mazury",
            start:"top 80%"
        },
        opacity:1,
        scaleY:1,
        duration:0.6,
        delay:1
    })
    gsap.to('.mazury-opis',{
        scrollTrigger:{
            trigger:".mazury",
            start:"top 80%"
        },
        opacity:1,
        scaleY:1,
        duration:0.6,
        delay:1
    })
















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

    navIcon.addEventListener('click', () => {
        navIcon.classList.add('sleeping');
        mobNavigation.classList.remove('sleeping')
        disableScroll(); // Zablokuj
    })
    closeIcon.addEventListener('click', () => {
        navIcon.classList.remove('sleeping');
        mobNavigation.classList.add('sleeping')
        enableScroll();  // Odblokuj

    })

});

