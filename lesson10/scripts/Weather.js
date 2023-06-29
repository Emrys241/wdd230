// Select HTML elements in the document
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('current-temp');
const conditionElement = document.querySelector('.weather-icon figcaption');

const apiKey = 'e4e9a3c6630e45e25eac6d6e2f048af1';
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
      const iconCode = data.weather[0].icon;
      const condition = capitalizeFirstLetter(data.weather[0].description);

      // Update HTML elements with the retrieved data
      weatherIconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
      temperatureElement.textContent = temperature;
      conditionElement.textContent = condition;
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

apiFetch();
