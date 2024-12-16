document.getElementById('downIndicator').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Find the section to scroll to
    const targetSection = document.querySelector(this.getAttribute('href'));

    // Smooth scroll to the target section
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.error('Target section not found.');
    }
});