// Get the current date
var currentDate = new Date();

// Get the current day of the week (0-6, where 0 represents Sunday)
var currentDay = currentDate.getDay();

// Check if it's Monday (1) or Tuesday (2)
if (currentDay === 1 || currentDay === 2) {
  // Get the banner element by its ID
  var bannerElement = document.getElementById("banner");

  // Set the message
  bannerElement.textContent =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}