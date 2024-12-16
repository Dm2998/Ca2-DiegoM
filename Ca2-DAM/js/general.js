//  Autor: Diego Medina 
// This code is for the general functionality of the website.
// 1. Add click and hover effects to skill icons
// 2. Add click animation to social media icons for the header icons. 
// 3. Icon hover effect for the social media icons.
// 4. Navbar dropdown on hover for the menu items in the core skills section.


// Add click animation for the navbar click for each option in the navbar.
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior for demo
        const element = this;

        // Add a bounce animation
        element.classList.add('bounce');
        setTimeout(() => {
            element.classList.remove('bounce'); // Remove animation after it finishes
        }, 300);

        // Optional: Log platform name (from data-platform attribute)
        console.log(`Clicked on ${element.getAttribute('data-platform')}!`);
    });
});

// css for the animation for the menu items in the navbar.
const style = document.createElement('style');
style.innerHTML = `
    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
    .bounce {
        animation: bounce 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

// code for the navbar for the menu items.
(function ($) {
    "use strict";

    $(document).ready(function () {
        // Toggle dropdown behavior based on screen size
        function updateDropdownBehavior() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').hover(
                    function () { $(this).addClass('show').find('.dropdown-toggle').attr('aria-expanded', 'true'); },
                    function () { $(this).removeClass('show').find('.dropdown-toggle').attr('aria-expanded', 'false'); }
                );
            } else {
                $('.navbar .dropdown').off('mouseenter mouseleave');
            }
        }

        updateDropdownBehavior();
        $(window).resize(updateDropdownBehavior);

        // hover and click effect 
        $('.nav-link').hover(
            function () { $(this).css({ color: '#007bff', transform: 'scale(1.2)', transition: '0.2s' }); },
            function () { $(this).css({ color: '', transform: 'scale(1)' }); }
        ).on('click', function () {
            $('.nav-link').removeClass('active').css({ fontWeight: '', color: '' });
            $(this).addClass('active').css({ fontWeight: 'bold', color: '#0056b3' });
        });
    });
})(jQuery);


// img overlay on hover

$(document).ready(function () {
    // show the over-lay for the text over the imag
    $(".education-img").on("load", function () {
        $(this).siblings(".overlay-text").fadeIn(500); // Show overlay text smoothly
    });
    // show the text over the image
    $(".overlay-text").on("click", function () {
        alert("the text over-lay text!");
    });
});


