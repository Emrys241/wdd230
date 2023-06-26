
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const city = 'accra';
const units = 'imperial';
const appId = 'eb9a0d74fedfaddac7cd755d3937ea78'; 

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  return Math.round(windChill);
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const windSpeed = weatherData.wind.speed;
  const windChill = calculateWindChill(weatherData.main.temp, windSpeed);
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1).toLowerCase();

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = capitalizedDesc;
  document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;

  const windChillElement = document.getElementById('windChill');
  if (!isNaN(windChill)) {
    windChillElement.textContent = `Wind Chill: ${windChill} °F`;
  } else {
    windChillElement.textContent = 'Wind Chill: N/A';
  }
}