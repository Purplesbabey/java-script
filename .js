/* DATE AND TIME */
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
console.log('Current Date and Time:', formattedDate);

/* DARK MODE */
const body = document.body;
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});
 
/*SIMPLE VALIDATON ON FORM SUBMIT */
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  const inputField = document.getElementById('myInput');
  const inputValue = inputField.value.trim();

  if (inputValue === '') {
    alert('Please enter a value.');
    event.preventDefault(); // Prevent form submission
  } else {
    // Form submission logic here
    console.log('Form submitted successfully:', inputValue);
  }
});
