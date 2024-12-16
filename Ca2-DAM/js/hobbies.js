

// code for the hobbies section 

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Function to handle filtering and rotation
    function filterAndRotate(filter) {
        galleryItems.forEach(item => {
            // Show or hide items based on filter
            if (filter === "*" || item.classList.contains(filter.substring(1))) {
                item.style.display = "block";

                // Add rotation effect
                const img = item.querySelector(".gallery-img");
                img.classList.add("rotate");

                // Remove rotation class after animation
                setTimeout(() => img.classList.remove("rotate"), 300);
            } else {
                item.style.display = "none";
            }
        });
    }

    // Add click event listener to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' class to clicked button
            this.classList.add("active");

            // Get the filter category
            const filter = this.getAttribute("data-filter");

            // Call the filter and rotate function
            filterAndRotate(filter);
        });
    });

    // Initialize by showing all items
    filterAndRotate("*");
});
