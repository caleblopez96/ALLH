const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const phoneInput = document.querySelector("input[type='tel']");
const emailInput = document.querySelector("input[type='phone'")
const form = document.querySelector('form');

// header mobile menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Phone input form formatting
phoneInput.addEventListener('input', mobileNumberFormatting)

function mobileNumberFormatting(e) {
  let input = e.target.value.replace(/\D/g, '');
  let formattedInput = '';

  if(input.length > 0) {
    formattedInput += '('+ input.substring(0, 3);
  }

  if(input.length >= 4) {
    formattedInput += ') '+ input.substring(3, 6)
  }

  if(input.length >= 7) {
    formattedInput += '-'+ input.substring(6, 10)
  }

  e.target.value = formattedInput
}

// email validation
function validateEmailAddress(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // chatgpt regex could be wrong
  return emailRegex.test(email)
}

form.addEventListener('submit', () => {
  const emailInputValue = emailInput.value
  if(!validateEmailAddress(email)){
    event.preventDefault()
    window.alert('please enter a valid email address')
  }
})