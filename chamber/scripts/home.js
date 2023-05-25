// Get the current date
var currentDate = new Date();

// Get the current day of the week (0-6, where 0 represents Sunday)
var currentDay = currentDate.getDay();

// Check if it's Monday (1) or Tuesday (2)
if (currentDay === 1 || currentDay === 2) {
  // Get the banner element by its ID
  var bannerElement = document.getElementById('banner');

  // Set the message
  bannerElement.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}


// Create the header element
var header = document.createElement("h2");
header.textContent = "Weather";

// Create the paragraph element
var paragraph = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin gravida. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Elementum.";

// Get the placeholder element
var placeholder = document.querySelector(".news");

// Append the header and paragraph to the placeholder
placeholder.appendChild(header);
// placeholder.appendChild(paragraph);


// Create the header element
var header = document.createElement("h2");
header.textContent = "Join";

// Create the paragraph element
var paragraph = document.querySelector("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin gravida. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Elementum";

// Get the placeholder element
var placeholder = document.querySelector(".join");

// Append the header and paragraph to the placeholder
placeholder.appendChild(header);
// placeholder.appendChild(paragraph);

// Create the header element
var header = document.createElement("h2");
header.textContent = "Event";

var header2 = document.createElement("h3");
header2.textContent = "The Diamond Shacks";

// Create the paragraph element
var paragraph = document.querySelector("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin gravida. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Elementum";

// Get the placeholder element
var placeholder = document.querySelector(".event");

// Append the header and paragraph to the placeholder
placeholder.appendChild(header);
// placeholder.appendChild(header2);
// placeholder.appendChild(paragraph);


var header = document.createElement("h2");
      header.textContent = "spot1";

      // Create the image element
      var image = document.createElement("img");
      image.src = "images/wheb-logo.jpeg";
      image.alt = "Wheb Media Logo";

      // Create the paragraph element
      var paragraph = document.createElement("p");
      paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed";

      // Get the placeholder element
      var placeholder = document.querySelector(".spot1");

      // Append the header, image, and paragraph to the placeholder
      placeholder.appendChild(header);
      // placeholder.appendChild(image);
      // placeholder.appendChild(paragraph);


var header = document.createElement("h2");
      header.textContent = "spot2";

      // Create the image element
      var image = document.createElement("img");
      image.src = "images/family-tree.png";
      image.alt = "Family History Logo";

      // // Create the paragraph element
      var paragraph = document.createElement("p");
      paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed";

      // Get the placeholder element
      var placeholder = document.querySelector(".spot2");

      // Append the header, image, and paragraph to the placeholder
      placeholder.appendChild(header);
      // placeholder.appendChild(image);
      // placeholder.appendChild(paragraph);

var header = document.createElement("h2");
      header.textContent = "DevTraco Estates";

      // Create the image element
      var image = document.createElement("img");
      image.src = "images/devtraco.jpg";
      image.alt = "DevTraco Logo";

      // Create the paragraph element
      // var paragraph = document.createElement("p");
      // paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed";

      // Get the placeholder element
      var placeholder = document.querySelector(".spot3");

      // Append the header, image, and paragraph to the placeholder
      placeholder.appendChild(header);
      placeholder.appendChild(image);
      placeholder.appendChild(paragraph);

// Create the header element
var header = document.createElement("h2");
header.textContent = "Weather";

// Create the paragraph element
var paragraph = document.querySelector("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin gravida. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Elementum";

// Get the placeholder element
var placeholder = document.querySelector(".weather");

// Append the header and paragraph to the placeholder
placeholder.appendChild(header);
placeholder.appendChild(paragraph);

// Create the image element
var callToAction = document.createElement("img");
callToAction.src = "images/community-img.jpeg";
callToAction.alt = "Wheb Media Logo";

var placeholder = document.querySelector(".call-to-action");

// Append the header, image, and paragraph to the placeholder
placeholder.appendChild(callToAction);

