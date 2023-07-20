function displaySpecialtyDrinksInfo() {
  const userOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
  const totalSpecialtyDrinks = userOrders.length;

  const infoCard = document.createElement('div');
  infoCard.classList.add('info-card');
  infoCard.innerHTML = `
    <h3>Specialty Drinks Information</h3>
    <p>Total Specialty Drinks Submitted: ${totalSpecialtyDrinks}</p>
  `;

  // Append the info card to the main content
  const mainContent = document.querySelector('.specialty');
  mainContent.appendChild(infoCard);
}

displaySpecialtyDrinksInfo();

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');


// Function to generate option elements for the select elements
function generateOptions(fruitOptions) {
  const selectElements = orderForm.querySelectorAll('select');
  selectElements.forEach(select => {
    const defaultOption = select.querySelector('option:first-child');
    defaultOption.selected = true; // Select the default option

    fruitOptions.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name;
      option.textContent = fruit.name;
      select.appendChild(option);
    });
  });
}

// Fetch fruit options and generate select options
async function fetchAndGenerateOptions() {
  try {
    const fruitOptions = await fetchFruitOptions();
    generateOptions(fruitOptions);
  } catch (error) {
    console.log(error);
  }
}

fetchAndGenerateOptions();

// Fetch fruit options and nutritional information from JSON file
async function fetchFruitOptions() {
  try {
      const response = await fetch('json/fruit.json');
      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          throw new Error('Failed to fetch fruit options');
      }
  } catch (error) {
      console.log(error);
  }
}

// Function to get the nutritional information of a specific fruit
function getFruitNutrition(fruitOptions, fruitName) {
  const fruit = fruitOptions.find(fruit => fruit.name === fruitName);
  return fruit ? fruit.nutritions : null;
}

// Function to calculate the total nutritional information
function calculateTotalNutrition(fruitOptions, fruit1, fruit2, fruit3) {
  const totalNutrition = {
      carbohydrates: 0,
      protein: 0,
      fat: 0,
      sugar: 0,
      calories: 0
  };

  [fruit1, fruit2, fruit3].forEach(fruit => {
      const nutrition = getFruitNutrition(fruitOptions, fruit);
      if (nutrition) {
          totalNutrition.carbohydrates += nutrition.carbohydrates;
          totalNutrition.protein += nutrition.protein;
          totalNutrition.fat += nutrition.fat;
          totalNutrition.sugar += nutrition.sugar;
          totalNutrition.calories += nutrition.calories;
      }
  });

  return totalNutrition;
}

orderForm.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent form submission to a new page

  // Get input values
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const instructions = document.getElementById('instructions').value;

  // Get current date
  const currentDate = new Date().toLocaleDateString();

  // Fetch fruit options
  const fruitOptions = await fetchFruitOptions();

  // Calculate total nutritional information
  const totalNutrition = calculateTotalNutrition(fruitOptions, fruit1, fruit2, fruit3);

  // Generate formatted output
  const output = `
  <h2>Order Summary</h2>
  <p><strong>Name:</strong> ${firstName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Fruit 1:</strong> ${fruit1}</p>
  <p><strong>Fruit 2:</strong> ${fruit2}</p>
  <p><strong>Fruit 3:</strong> ${fruit3}</p>
  <p><strong>Special Instructions:</strong> ${instructions}</p>
  <p><strong>Order Date:</strong> ${currentDate}</p>
  <h3>Total Nutritional Information</h3>
  <p><strong>Carbohydrates:</strong> ${totalNutrition.carbohydrates}g</p>
  <p><strong>Protein:</strong> ${totalNutrition.protein}g</p>
  <p><strong>Fat:</strong> ${totalNutrition.fat}g</p>
  <p><strong>Sugar:</strong> ${totalNutrition.sugar}g</p>
  <p><strong>Calories:</strong> ${totalNutrition.calories}</p>
  `;

  // Display the output in the order summary element
  orderSummary.innerHTML = output;

  // Store the form data in local storage
  const userOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
  const order = {
    firstName,
    email,
    phone,
    fruit1,
    fruit2,
    fruit3,
    instructions,
    date: currentDate,
    nutrition: totalNutrition,
  };
  userOrders.push(order);
  localStorage.setItem('userOrders', JSON.stringify(userOrders));
});
