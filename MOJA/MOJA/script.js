// Přidejte toto na konec vašeho script.js

// Vylepšené animace při scrollování
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.content-wrapper, .portfolio-item, .form-group');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Nastavení počátečního stavu pro animace
document.querySelectorAll('.content-wrapper, .portfolio-item, .form-group').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

// Spuštění při načtení
window.addEventListener('load', () => {
    animateOnScroll();
    setTimeout(() => {
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '1';
        });
    }, 300);
});

// Spuštění při scrollování
window.addEventListener('scroll', animateOnScroll);