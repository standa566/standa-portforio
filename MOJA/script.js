document.addEventListener('DOMContentLoaded', function() {
    // Aktualizace roku v patičce
    document.getElementById('year').textContent = new Date().getFullYear();

    // Hladký scroll pro navigaci
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Odeslání formuláře
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Zde by bylo reálné odeslání formuláře
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Formulář odeslán:', formValues);
            
            // Ukázka úspěšného odeslání
            alert('Děkuji za vaši zprávu! Brzy se vám ozvu zpět.');
            this.reset();
        });
    }

    // Animace skill barů při scrollování
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Spustit animaci při načtení
    animateSkillBars();
    
    // Přidat Intersection Observer pro animaci při scrollování
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const skillsSection = document.getElementById('dovednosti');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});