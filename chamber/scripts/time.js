let date = new Date();
let dateModified = new Date(document.lastModified);

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector("#date").innerHTML = formatDate(date);
document.querySelector("#copyright").innerHTML = date.getFullYear();
document.getElementById("last_updated").textContent = dateModified.toLocaleString();

function formatDate(date) {
  var dayName = dayNames[date.getDay()];
  var monthIndex = date.getMonth();
  var monthName = monthNames[monthIndex];
  var year = date.getFullYear();
  var day = date.getDate();
  return dayName + ", " + monthName + " " + day + ", " + year;
}
