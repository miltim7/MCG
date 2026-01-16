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


    // ===== Active Menu Link Logic (UPDATED) =====
    // Берем все секции, чтобы определить их порядок (индекс)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header-nav a');

    const navObserverOptions = {
        threshold: 0,
        // Смещаем область видимости, чтобы переключение происходило корректнее
        rootMargin: '-30% 0px -50% 0px' 
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Убираем активный класс у всех ссылок
                navLinks.forEach(link => link.classList.remove('active'));
                
                // 2. Определяем, какая это по счету секция на странице (0, 1, 2...)
                const sectionArray = Array.from(sections);
                const index = sectionArray.indexOf(entry.target);
                
                let activeLink;

                // 3. ЛОГИКА: Если это 1-я или 2-я секция -> подсвечиваем #about
                if (index === 0 || index === 1) {
                    activeLink = document.querySelector('.header-nav a[href="#about"]');
                } else {
                    // Иначе ищем ссылку по ID секции
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        activeLink = document.querySelector(`.header-nav a[href="#${id}"]`);
                    }
                }
                
                // 4. Добавляем класс, если ссылка найдена
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });


    // ===== Language Switcher =====
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length) {
        const path = window.location.pathname.replace(/\/+$/, '');
        const isEn = path === '/en' || path.startsWith('/en/');
        const isAz = path === '/az' || path.startsWith('/az/');
        const current = isEn ? 'en' : isAz ? 'az' : 'ru';

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === current);

            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                if (lang === current) return;
                if (lang === 'ru') window.location.href = '/';
                if (lang === 'en') window.location.href = '/en';
                if (lang === 'az') window.location.href = '/az';
            });
        });
    }
}); 