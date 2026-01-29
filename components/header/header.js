// header.js
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.header-nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            nav.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
    }

    document.querySelectorAll('.header-nav a').forEach(link => {
        link.addEventListener('click', () => {
            burger?.classList.remove('active');
            nav?.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });

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

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header-nav a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const sectionArray = Array.from(sections);
                const index = sectionArray.indexOf(entry.target);
                let activeLink;
                if (index === 0 || index === 1) {
                    activeLink = document.querySelector('.header-nav a[href="#about"]');
                } else {
                    const id = entry.target.getAttribute('id');
                    if (id) activeLink = document.querySelector(`.header-nav a[href="#${id}"]`);
                }
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { threshold: 0, rootMargin: '-30% 0px -50% 0px' });

    sections.forEach(section => navObserver.observe(section));

    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length) {
        const path = window.location.pathname;
        let current = 'en'; 
        if (path.includes('/ru/')) current = 'ru';
        else if (path.includes('/az/')) current = 'az';

        langButtons.forEach(btn => {
            const btnLang = btn.dataset.lang;
            btn.classList.toggle('active', btnLang === current);
            btn.addEventListener('click', () => {
                if (btnLang === current) return;
                let targetUrl = '/';
                if (btnLang === 'ru') targetUrl = '/ru/';
                if (btnLang === 'az') targetUrl = '/az/';
                window.location.href = targetUrl;
            });
        });
    }
});