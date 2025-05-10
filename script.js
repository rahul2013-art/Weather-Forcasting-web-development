const apiKey = '9ece35fd8c8a2500e2990e6338c309ed';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
// Replace with your weather news API endpoint
const weatherNewsApi = '(c0c915d783794483b58dffcd1581b17d)';

// Fetch weather news data
fetch(weatherNewsApi)
  .then(response => response.json())
  .then(data => {
const weatherNewsList = document.getElementById('weather-news-list');
data.forEach(article => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = article.url;
  a.textContent = article.title;
  li.appendChild(a);
  weatherNewsList.appendChild(li);
});
})
.catch(error => console.error(error));
