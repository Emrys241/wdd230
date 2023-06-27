const url = 'json/data.json';

const switchToGridView = () => {
  const directoryContainer = document.querySelector('.directory-container');
  directoryContainer.classList.remove('list-view');
  directoryContainer.classList.add('grid-view');
};

const switchToListView = () => {
  const directoryContainer = document.querySelector('.directory-container');
  directoryContainer.classList.remove('grid-view');
  directoryContainer.classList.add('list-view');

  const images = directoryContainer.querySelectorAll('img');
  images.forEach((image) => {
    image.style.display = 'block';
  });
};

  


async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
  displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    const directoryContainer = document.querySelector('.directory-container');
    const isGridView = directoryContainer.classList.contains('grid-view');
  
    directoryContainer.innerHTML = ''; // Clear the container before adding companies
  
    companies.forEach((company) => {
      if (isGridView) {
        let card = createCard(company);
        directoryContainer.appendChild(card);
      } else {
        let listItem = createListItem(company);
        directoryContainer.appendChild(listItem);
      }
    });
  };
  
  

const createCard = (company) => {
  let card = document.createElement('div');
  card.classList.add('directory-card');

  let h2 = document.createElement('h2');
  h2.textContent = company.name;

  let logo = document.createElement('img');
  logo.setAttribute('src', company.image);
  logo.setAttribute('alt', company.name + ' Logo');

  let address = document.createElement('p');
  address.textContent = 'Address: ' + company.address;

  let phone = document.createElement('p');
  phone.textContent = 'Phone: ' + company.phone;

  let website = document.createElement('p');
  let link = document.createElement('a');
  link.setAttribute('href', company.website);
  link.textContent = 'Website';
  website.appendChild(link);

  let membership = document.createElement('p');
  membership.textContent = 'Membership: ' + company.membership;

  card.appendChild(h2);
  card.appendChild(logo);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);
  card.appendChild(membership);

  return card;
};

const createListItem = (company) => {
  let listItem = document.createElement('div');
  listItem.classList.add('directory-list-item');

  let h2 = document.createElement('h2');
  h2.textContent = company.name;

  let logo = document.createElement('img');
  logo.setAttribute('src', company.image);
  logo.setAttribute('alt', company.name + ' Logo');

  let address = document.createElement('p');
  address.textContent = 'Address: ' + company.address;

  let membership = document.createElement('p');
  membership.textContent = 'Membership: ' + company.membership;

  listItem.appendChild(h2);
  listItem.appendChild(logo);
  listItem.appendChild(address);
  listItem.appendChild(membership);

  return listItem;
};





