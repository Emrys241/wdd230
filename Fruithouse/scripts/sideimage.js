var images = [
    "images/fruit2.webp",
    "images/fruit3.webp",
    "images/fruit4.webp",
    "images/fruit5.webp",
    "images/fruit6.webp",
    "images/fruit7.webp",
    "images/fruit8.webp",
    "images/fruit9.webp",
    "images/fruit10.webp",
    "images/fruit11.webp",
    
    
  ];
  
  var textOverlays = [,
    "Nutritiuos fruits juice made from quality organic fruits",
    "Deliveries available at your door step",
    "Variaty of juice available on your order",
    "How often do you take berries?",
    "100% nutrients for your immune system",
    "Ready for Cosumption",
    "Fresh Organic Fruits",
    "Fresh Organic Banana",
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
  
  setInterval(changeImage, 10000); // Call changeImage every 10 seconds
  