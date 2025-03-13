// vytvoř funkci na pythorovou vetu
function pythogorovaVeta(a,b,){
    let c = ((a * a) + (b * b) )
    let odmocneneC = math.sqrt(c)
    console.log(odmocneneC);
    }
    
    pythogorovaVeta(10,9)
    
    gsap.to('.horizontal-content', {
        xPercent: -100 * (document.querySelectorAll('.box').length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.horizontal-scroll',
            start: 'top top',
            end: '+=2000',
            pin: true,
            scrub: true,
        }
    });