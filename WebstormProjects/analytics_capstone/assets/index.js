document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // Add doodles to the background
    const doodlesContainer = document.querySelector('.doodles');
    const doodleShapes = ['✎', '✏', '✐', '✑', '✒', '✍', '✁', '✂', '✃', '✄', '✇', '✿', '❀', '❁'];
    const numDoodles = 50;

    for (let i = 0; i < numDoodles; i++) {
        const doodle = document.createElement('div');
        doodle.classList.add('doodle');
        doodle.textContent = doodleShapes[Math.floor(Math.random() * doodleShapes.length)];
        doodle.style.left = `${Math.random() * 100}vw`;
        doodle.style.top = `${Math.random() * 100}vh`;
        doodle.style.fontSize = `${Math.random() * 20 + 10}px`;
        doodle.style.transform = `rotate(${Math.random() * 360}deg)`;
        doodlesContainer.appendChild(doodle);
    }

    // Moving signature
    const signature = document.getElementById('signature');
    let direction = 1;
    let position = 0;

    function moveSignature() {
        position += direction;
        signature.style.transform = `translateX(${position}px)`;

        if (position > 50 || position < -50) {
            direction *= -1;
        }

        requestAnimationFrame(moveSignature);
    }

    moveSignature();
});