// celebration script for the send button in the contact form page to show confetti effect


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const confettiContainer = document.getElementById('confettiEffect');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents form submission
            confettiContainer.style.display = 'block'; // Show the confetti container
            generateConfetti(200); // Generate 200 confetti pieces

            // Hide confetti after 5 seconds
            setTimeout(() => {
                confettiContainer.style.display = 'none';
                confettiContainer.innerHTML = ''; // Remove all confetti pieces
            }, 5000);

            form.reset(); // Clear the form fields
        });
    } else {
        console.error('Form with ID "contactForm" not found.');
    }

    // Function to generate confetti
    function generateConfetti(amount) {
        for (let i = 0; i < amount; i++) {                           // Generate the specified amount of confetti pieces
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            confettiPiece.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2-5 seconds
            confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Random delay
            confettiPiece.style.backgroundColor = getRandomColor(); // Random color
            confettiContainer.appendChild(confettiPiece);
        }
    }

    // Function to generate random colors
    function getRandomColor() {
        const colors = ['#ffd700', '#ff4500', '#00bfff', '#32cd32', '#ff69b4', '#9400d3'];  // Array of colors
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
