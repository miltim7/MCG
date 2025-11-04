// assets\js\main.js
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    mobileMenuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        headerNav.classList.toggle('active');
        document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.header-nav a').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenuToggle.classList.remove('active');
            headerNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        }
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.clients').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.partners').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.geography').forEach(element => {
        observer.observe(element);
    });
});