// components/advantages/advantages.js
document.addEventListener('DOMContentLoaded', function() {
    const advantageCards = document.querySelectorAll('.advantage-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);
    
    advantageCards.forEach(card => {
        observer.observe(card);
    });
});