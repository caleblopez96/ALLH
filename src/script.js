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

  if (input.length > 0) {
    formattedInput += '(' + input.substring(0, 3);
  }

  if (input.length >= 4) {
    formattedInput += ') ' + input.substring(3, 6)
  }

  if (input.length >= 7) {
    formattedInput += '-' + input.substring(6, 10)
  }

  e.target.value = formattedInput
}

// email validation
function validateEmailAddress(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // chatgpt regex could be wrong
  return emailRegex.test(email)
}

// form.addEventListener('submit', () => {
//   const emailInputValue = emailInput.value
//   if (!validateEmailAddress(email)) {
//     event.preventDefault()
//     window.alert('please enter a valid email address')
//   }
// })

// const statusDiv = document.getElementById('status');

// form.addEventListener('submit', handleSubmit);

// async function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(form);

//   try {
//     const response = await fetch(form.action, {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     });

//     if (response.ok) {
//       // Form submitted successfully
//       form.reset(); // This clears the form
//       statusDiv.innerHTML = "Thanks for your submission!";
//       statusDiv.className = "mt-4 text-center font-semibold text-green-600";
//     } else {
//       // There was an error
//       const data = await response.json();
//       if (data.errors) {
//         statusDiv.innerHTML = data.errors.map(error => error.message).join(", ");
//       } else {
//         statusDiv.innerHTML = "Oops! There was a problem submitting your form";
//       }
//       statusDiv.className = "mt-4 text-center font-semibold text-red-600";
//     }
//   } catch (error) {
//     statusDiv.innerHTML = "Oops! There was a problem submitting your form";
//     statusDiv.className = "mt-4 text-center font-semibold text-red-600";
//   }
// }