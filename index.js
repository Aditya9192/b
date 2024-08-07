// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})



document.addEventListener('DOMContentLoaded', () => {
  const bookButton = document.getElementById('bookButton');
  const popupForm = document.getElementById('popupForm');
  const closeButton = document.querySelector('.close');

  // Show the popup form when the "Book" button is clicked
  bookButton.addEventListener('click', () => {
      popupForm.style.display = 'flex';
  });

  // Hide the popup form when the close button is clicked
  closeButton.addEventListener('click', () => {
      popupForm.style.display = 'none';
  });

  // Hide the popup form when clicking outside of the popup content
  window.addEventListener('click', (event) => {
      if (event.target === popupForm) {
          popupForm.style.display = 'none';
      }
  });
});
