// Select HTML elements in the document
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('current-temp');
const conditionElement = document.querySelector('.weather-icon figcaption');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById('windChill');

const apiKey = '15cceac47631850b455872b6c555a9ef';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Sandpoint,us&appid=${apiKey}&units=imperial`;

// Defined asynchronous function to fetch data from the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      // Extract relevant information from the data object
      const temperature = data.main.temp;
      const windSpeed = data.wind.speed;
      const iconCode = data.weather[0].icon;
      const condition = capitalizeFirstLetter(data.weather[0].description);

      // Update HTML elements with the retrieved data
      weatherIconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
      temperatureElement.textContent = temperature;
      conditionElement.textContent = condition;
      windSpeedElement.textContent = `Wind Speed: ${windSpeed}`;
      windChillElement.textContent = `Wind Chill: ${calculateWindChill(temperature, windSpeed).toFixed(2)}`;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log('An error occurred while fetching weather data:', error);
  }
}

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(string) {
  return string.replace(/\b\w/g, (match) => match.toUpperCase());
}

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  // Implement your wind chill calculation logic here
  // Replace this placeholder logic with the actual formula
  return temperature - windSpeed;
}

apiFetch();
