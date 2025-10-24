
// --- Modal (Lightbox) Functions ---

function openImageModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    // Get image source and caption from data attributes
    const imgSrc = element.getAttribute('data-img-src');
    const captionText = element.getAttribute('data-caption');

    // Populate modal content
    modalImage.src = imgSrc;
    modalCaption.innerHTML = captionText;

    // Show modal with fade effect
    modal.style.display = 'flex'; // Set display property
    setTimeout(() => {
        modal.classList.add('show');
    }, 10); // Short delay to trigger the CSS transition
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    // Start fade-out effect
    modal.classList.remove('show');
    
    // Hide modal after transition completes (300ms defined in CSS)
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close the modal if the user clicks anywhere outside the content (on the dark background)
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeImageModal();
    }
});

// Close the modal when the Escape key is pressed
window.addEventListener('keydown', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.key === "Escape" && modal.classList.contains('show')) {
        closeImageModal();
    }
});


// --- Gallery Filter Logic (Modified from your original code) ---
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Function to handle filtering and effect
    function filterAndEffect(filter) {
        galleryItems.forEach(item => {
            const isMatch = filter === "*" || item.classList.contains(filter.substring(1));

            // Apply fade-out effect to unmatched items
            if (!isMatch) {
                item.style.opacity = 0;
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = "none";
                }, 300); // Wait for transition
            } else {
                item.style.display = "block";
                // Short delay to ensure display: block is processed before transition
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.transform = 'scale(1)';
                }, 10); 
            }
        });
    }

    // Add click event listener to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");
            filterAndEffect(filter);
        });
    });

    // Initialize by showing all items
    filterAndEffect("*");
});

// Add this CSS to make the filter transition smooth
/* .gallery-item {
    transition: all 0.3s ease-in-out; 
    transform: scale(1);
    opacity: 1;
}
*/


// Add this jQuery code block inside your document.ready block or a dedicated JS file

$(document).ready(function () {
    // Initialize Magnific Popup for all elements with class 'image-popup'
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // Styles the modal (centering, background)
        image: {
            verticalFit: true, // Ensures image fits vertically on screen
        },
        zoom: {
            enabled: true,
            duration: 300, // Zoom-in duration
        },
    });

    // --- Keep your existing Gallery Filter Logic below this ---

    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    // ... (rest of your filterAndEffect and event listener code)
    // You do not need to change the filter logic.
});