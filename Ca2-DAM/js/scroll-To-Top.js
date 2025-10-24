// 


document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollToTopBtn');
    const scrollThreshold = 300; // Pixels scrolled before button appears

    // Function to show/hide the button
    function toggleScrollButton() {
        if (window.scrollY > scrollThreshold) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    }

    // Event listener for showing/hiding on scroll
    window.addEventListener('scroll', toggleScrollButton);

    // Initial check in case the page loads scrolled down
    toggleScrollButton(); 

    // Optional: Smooth Scroll implementation
    scrollButton.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the default jump
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
});