// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if the temperature and wind speed meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate wind chill factor
      var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
      return windChill.toFixed(2); // Return wind chill factor rounded to 2 decimal places
    } else {
      return "N/A"; // Return "N/A" if the input values do not meet the requirements
    }
  }
  
  // Get input values of temperature and wind speed
  var temperature = parseFloat(prompt("Enter temperature (in Fahrenheit):"));
  var windSpeed = parseFloat(prompt("Enter wind speed (in mph):"));
  
  // Call the calculateWindChill function and display the result
  var windChillFactor = calculateWindChill(temperature, windSpeed);
  console.log("Wind Chill Factor: " + windChillFactor);
  