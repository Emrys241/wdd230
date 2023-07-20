var images = [
  "images/pineapp.webp",
  "images/apple.jpeg",
  "images/banana.jpeg",
  "images/berries.jpeg",
  "images/orange.jpeg",
  "images/strawbery.jpeg",
  "images/pear.jpeg",
  "images/guava.jpeg", 
  "images/pawpaw.jpeg",   
];
  
var textOverlays = [
  "Nutritiuos fruits juice made from quality organic fruits",
  "Deliveries available at your door step",
  "Variaty of juice available on your order",
  "How often do you take berries?",
  "100% nutrients for your immune system",
  "Ready for Cosumption",
  "Fresh Organic Fruits",
  "Fresh Organic Produce",
  "Free Deliveries within Sanata Monica",
  "Get yours now",
];
  
var currentImageIndex = 0;
var sidebarImage = document.getElementById("sidebar-image");
var overlayText = document.getElementById("overlay-text");
  
function changeImage() {
  sidebarImage.src = images[currentImageIndex];
  overlayText.textContent = textOverlays[currentImageIndex];

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // Call changeImage every 10 seconds
  