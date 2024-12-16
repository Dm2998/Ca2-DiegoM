
// The code is for the icons core skills section.
document.addEventListener('DOMContentLoaded', function () {
    // select al elements with for the icons in the skills section. 
    const icons = document.querySelectorAll('#skillest i');

    
    // make 
    icons.forEach(icon => {
        // Add a click event listener
        icon.addEventListener('click', function () {
            const skillType = this.parentElement.querySelector('h4').textContent;
            alert(`You clicked on the ${skillType} icon!`);
        });

        // add hover effect to the icons.
        icon.addEventListener('mouseover', function () {
            this.style.color = '#007bff'; // Change color on hover
            this.style.transform = 'scale(1.2)'; // Scale up slightly
            this.style.transition = 'transform 0.2s, color 0.2s'; // Smooth transition
        });

        icon.addEventListener('mouseout', function () {
            this.style.color = ''; // Reset color
            this.style.transform = ''; // Reset scale
        });
    });
});
