document.addEventListener("DOMContentLoaded", function() {
    // Get the form and info card elements
    const form = document.getElementById("fresh-form");
    const infoCard = document.getElementById("info-card");
  
    // Check if the user's specialty drink count is stored in localStorage
    let specialtyDrinksCount = localStorage.getItem("specialtyDrinksCount");
    if (!specialtyDrinksCount) {
      // If not stored, initialize the count to 0
      specialtyDrinksCount = 0;
    }
  
    // Display the initial count on the info card
    infoCard.textContent = `Total Specialty Drinks: ${specialtyDrinksCount}`;
  
    // Event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get the drink name from the form input
      const drinkNameInput = document.getElementById("drink-name");
      const drinkName = drinkNameInput.value;
  
      // Increment the specialty drinks count
      specialtyDrinksCount++;
      // Update the count in localStorage
      localStorage.setItem("specialtyDrinksCount", specialtyDrinksCount);
  
      // Display the updated count on the info card
      infoCard.textContent = `Total Specialty Drinks: ${specialtyDrinksCount}`;
  
      // Reset the form input
      drinkNameInput.value = "";
    });
  });
  