const navMenu = document.querySelector('.nav-menu');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 50) {
        navMenu.classList.add('scrolled');
    } else {
        navMenu.classList.remove('scrolled');
    }

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.85;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});