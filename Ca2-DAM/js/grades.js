
// code for the grades   

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.category-link');
    const items = document.querySelectorAll('.category-items');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = link.getAttribute('data-category');
            const target = document.getElementById(category);

            // Toggle visibility of the clicked category
            if (target.style.display === 'block') {
                target.style.display = 'none';
            } else {
                // Hide all other categories
                items.forEach(item => item.style.display = 'none');
                // Show the selected category
                target.style.display = 'block';
            }
        });
    });
});
