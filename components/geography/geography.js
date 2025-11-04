// components/geography/geography.js

document.addEventListener('DOMContentLoaded', function() {
    const geographySection = document.querySelector('.geography');
    if (!geographySection) return;

    function initMapInteractions() {
        const mapCards = geographySection.querySelectorAll('.map-card');
        
        mapCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
    }

    // Инициализация
    initMapInteractions();
});