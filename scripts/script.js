const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const sectionId = event.target.getAttribute('href');
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const activeSection = document.querySelector(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    });
});

