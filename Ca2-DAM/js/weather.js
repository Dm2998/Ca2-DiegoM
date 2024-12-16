
// Step 2: JavaScript for Weather and Location
// Integrate Geolocation and fetch data from a weather API.


document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8d6b6c32c096ca818c2b1ae222f585a4'; // API key
    const tempElem = document.querySelector('.temp');
    const conditionElem = document.querySelector('.condition');
    const city = 'Dublin'; // Hardcoded city

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            const { temp } = data.main;
            const { description } = data.weather[0];

            tempElem.textContent = `Temperature: ${temp.toFixed(1)}°C`;
            conditionElem.textContent = `Condition: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            tempElem.textContent = 'Unable to load temperature.';
            conditionElem.textContent = 'Unable to load weather condition.';
        });
});
