document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Load schedule content
    fetch('content/schedule/Schedule')
        .then(response => response.text())
        .then(data => {
            document.getElementById('schedule-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading schedule:', error);
            document.getElementById('schedule-content').innerHTML = 'Error loading schedule. Please try again later.';
        });

    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Animate doodles
    const doodles = document.querySelector('.doodles');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        doodles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});