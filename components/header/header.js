// components/header/header.js

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    // Скролл эффект для хедера
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // Анимация появления секций при скролле
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // ===== Language Switcher (RU/EN/AZ) =====
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length) {
        const path = window.location.pathname.replace(/\/+$/, ''); // убрать trailing /
        const isEn = path === '/en' || path.startsWith('/en/');
        const isAz = path === '/az' || path.startsWith('/az/');
        const current = isEn ? 'en' : isAz ? 'az' : 'ru';

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === current);

            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;

                // если уже на этой локали — не дергаем
                if (lang === current) return;

                if (lang === 'ru') window.location.href = '/';
                if (lang === 'en') window.location.href = '/en';
                if (lang === 'az') window.location.href = '/az';
            });
        });
    }
});
