// components/partners/partners.js

document.addEventListener('DOMContentLoaded', function() {
    const partnersSection = document.querySelector('.partners');
    if (!partnersSection) return;

    // Инициализация карусели
    function initCarousel() {
        const track = partnersSection.querySelector('.partners-track');
        const logos = track.querySelectorAll('.partner-logo');
        
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Инициализация
    initCarousel();

    // Оптимизация производительности анимации
    const track = partnersSection.querySelector('.partners-track');
    if (track) {
        track.style.willChange = 'transform';
    }
});