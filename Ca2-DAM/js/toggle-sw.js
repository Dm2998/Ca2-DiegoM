

// JavaScript for Toggle switch
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const body = document.body;

    // Initialize theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(`${currentTheme}-theme`);
    toggleSwitch.checked = currentTheme === 'dark';

    // Event listener for toggle switch
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});

