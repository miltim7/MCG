// components/contacts/contacts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const inputs = document.querySelectorAll('.form-input');
    
    // Анимация появления элементов
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками контактов
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Наблюдаем за формой
    const formElement = document.querySelector('.contacts-form');
    if (formElement) {
        formElement.style.opacity = '0';
        formElement.style.transform = 'translateY(30px)';
        formElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(formElement);
    }
    
    // Обработка формы
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;
            
            // Имитация отправки
            submitButton.innerHTML = 'Отправка...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Показываем уведомление об успехе
                alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
                form.reset();
            }, 2000);
        });
    }
    
    // Анимация placeholder для полей формы
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Проверяем заполненные поля при загрузке
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});