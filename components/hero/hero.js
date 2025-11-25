// components/hero/hero.js

document.addEventListener('DOMContentLoaded', function() {
    const bgImages = document.querySelectorAll('.hero-bg-image:not(.hero-bg-mobile)');
    let currentBg = 0;

    function changeBg() {
        bgImages[currentBg].classList.remove('active');
        currentBg = (currentBg + 1) % bgImages.length;
        bgImages[currentBg].classList.add('active');
    }

    setInterval(changeBg, 10000);
});