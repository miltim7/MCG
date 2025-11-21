// components\projects\projects.js
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.projects-tab');
    const sections = document.querySelectorAll('.projects-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show corresponding section
            const targetSection = document.getElementById(this.dataset.tab);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});