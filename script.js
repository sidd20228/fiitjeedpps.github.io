document.addEventListener('DOMContentLoaded', function () {
  const dppsButton = document.getElementById('dpps-btn');
  const requestAccessButton = document.getElementById('request-access-btn');

  dppsButton.addEventListener('click', function () {
    // Open a new page when the "DPPs" button is clicked
    window.open('dpps.html', '_blank');
  });
  
   requestAccessButton.addEventListener('click', function () {
    // Open the link for requesting access
    window.open('https://forms.gle/tFjxQnuay2zbhqkm6', '_blank');
  });

});
document.addEventListener('DOMContentLoaded', function () {
  const class11Button = document.getElementById('class-11-btn');
  const class12Button = document.getElementById('class-12-btn');

  class11Button.addEventListener('click', function () {
    // Open a new page when the "Class 11" button is clicked
    window.open('class11.html', '_blank');
  });

  class12Button.addEventListener('click', function () {
    // Open a new page when the "Class 12" button is clicked
    window.open('class12.html', '_blank');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const physicsButton = document.getElementById('physics-btn');
  const chemistryButton = document.getElementById('chemistry-btn');
  const mathsButton = document.getElementById('maths-btn');

  physicsButton.addEventListener('click', function () {
    // Open a new page when the "Physics" button is clicked
    window.open('physics.html', '_blank');
  });

  chemistryButton.addEventListener('click', function () {
    // Handle click for Chemistry button
    // You can implement the functionality here
  });

  mathsButton.addEventListener('click', function () {
    // Open a new page when the "Maths" button is clicked
    window.open('maths.html', '_blank');
  });
});