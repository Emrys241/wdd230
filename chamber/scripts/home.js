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

// ______Discover Page SCripts______//

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img[data-src]");

  const options = {
    threshold: 0.1,
  };

  const lazyLoad = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, options);

  lazyImages.forEach(function (img) {
    observer.observe(img);
  });
});

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "chamber/thankyou.html";
});

