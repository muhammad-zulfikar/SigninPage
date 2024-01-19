const container = document.querySelector('.container');
const search = document.querySelector('.search');
const signinLink = document.querySelector('.signin-link');
const signupLink = document.querySelector('.signup-link');
const loginPopup = document.querySelector('.login-popup');
const iconClose = document.querySelector('.icon-close');
const searchPopup = document.querySelector('.search-popup');
const searchClose = document.querySelector('.search-close');

signupLink.addEventListener('click', () => {
    container.classList.add('active');
});

signinLink.addEventListener('click', () => {
    container.classList.remove('active');
});

loginPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
    search.classList.remove('search-popup');
});

iconClose.addEventListener('click', () => {
    container.classList.remove('active-popup');
});

searchPopup.addEventListener('click', () => {
    search.classList.add('search-popup');
    container.classList.remove('active-popup');
});

searchClose.addEventListener('click', () => {
    search.classList.remove('search-popup');
})

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
  
    searchInput.addEventListener('focus', function () {
      // Add the focused class when the input is clicked
      searchInput.classList.add('focused');
    });
  
    searchInput.addEventListener('blur', function () {
      // Remove the focused class when the input loses focus
      searchInput.classList.remove('focused');
    });
  });
  