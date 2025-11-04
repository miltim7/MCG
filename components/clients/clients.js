// components/clients/clients.js

document.addEventListener('DOMContentLoaded', function() {
    const clientsSection = document.querySelector('.clients');
    if (!clientsSection) return;

    // Инициализация карусели
    function initCarousel() {
        const track = clientsSection.querySelector('.clients-track');
        const logos = track.querySelectorAll('.client-logo');
        
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Инициализация
    initCarousel();

    // Оптимизация производительности анимации
    const track = clientsSection.querySelector('.clients-track');
    if (track) {
        track.style.willChange = 'transform';
    }
});