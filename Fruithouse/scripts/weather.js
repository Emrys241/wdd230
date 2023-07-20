const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

const city = 'california';
const units = 'imperial';
const appId = 'e4e9a3c6630e45e25eac6d6e2f048af1';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${appId}`;

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function displayWeather() {
  try {
    const currentWeatherData = await apiFetch(currentWeatherUrl);
    const forecastData = await apiFetch(forecastUrl);
    displayCurrentWeather(currentWeatherData);
    displayForecast(forecastData);
  } catch (error) {
    console.log(error);
  }
}


function displayCurrentWeather(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const humidity = weatherData.main.humidity;
  const iconCode = weatherData.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1).toLowerCase();
  const weatherCode = weatherData.weather[0].icon;
  const backgroundImageUrl = getBackgroundImageUrl(weatherCode);

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = capitalizedDesc;
  document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
}
function getBackgroundImageUrl(weatherCode) {
  // Map weather code to corresponding image URL
  const imageUrls = {
    '01d': 'images/weather1.webp',
    '01n': 'images/weather2.webp',
    '02d': 'images/weather3.webp',
    '02n': 'images/weather4.webp',
    // Add more weather codes and corresponding image URLs as needed
  };
   // Default image URL for unknown weather codes
   const defaultImageUrl = 'path/to/default-image.jpg';

   // Get the image URL based on the weather code
   const imageUrl = imageUrls[weatherCode] || defaultImageUrl;
 
   return imageUrl;
 }

function displayForecast(forecastData) {
  forecastContainer.innerHTML = '<h2>Three-day Forecast</h2>';

  for (let i = 0; i < 3; i++) {
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');

    const date = new Date(forecastData.list[i * 8].dt * 1000);
    const temperature = forecastData.list[i * 8].main.temp.toFixed(0);
    const iconCode = forecastData.list[i * 8].weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    forecastItem.innerHTML = `
      <p>Date: ${date.toDateString()}</p>
      <p>Temperature: ${temperature}°F</p>
      <img src="${iconUrl}" alt="Icon for weather">
    `;

    forecastContainer.appendChild(forecastItem);
  }
}

displayWeather();