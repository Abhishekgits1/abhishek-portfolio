document.addEventListener('DOMContentLoaded', function () {
    const openMenuButton = document.getElementById('openMenuButton');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    openMenuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('hidden');
    });

    closeMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
});


// Light And Dark Mode

const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Load saved mode from local storage
const savedMode = localStorage.getItem('mode');
if (savedMode) {
  body.classList.add(savedMode);
}

toggleButton.addEventListener('click', () => {
 
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Save the current mode to local storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark-mode');
  } else {

    localStorage.setItem('mode', 'light-mode');
  }
});



// this is for change button 

document.getElementById('toggle-button').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});




// Auto Clear 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // You can add your form submission logic here (e.g., sending data to the server)

    // Clear the form fields
    this.reset();

});