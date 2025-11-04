// components\header\header.js

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    const header = document.querySelector('header');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        headerNav.classList.toggle('active');
        document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.header-nav a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            headerNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
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
});