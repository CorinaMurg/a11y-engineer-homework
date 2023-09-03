
// CLOSE GREAT-DAY MESSAGE
document.getElementById('great-day--button').addEventListener('click', function() {
    document.getElementById('great-day').style.display = 'none';
}); 

// FORM VALIDATION
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Hide all previous error messages
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(msg => msg.style.display = "none");
  
      // Validate Full Name
      const fullName = document.getElementById('full-name').value.trim();
      if (!fullName) {
          document.getElementById('full-name-error').style.display = 'block';
      } 

  
      // Validate Email
      const email = document.getElementById('email').value.trim();
      if (!email) {
          document.getElementById('missing-email').style.display = 'block';
      } 
      
      if (email && !email.includes('@')) {
          document.getElementById('missing-email').style.display = 'none';
          document.getElementById('missing-@').style.display = 'block';
      } 
  
      // Validate Message
      const message = document.getElementById('message').value.trim();
      if (!message) {
          document.getElementById('message-error').style.display = 'block';
      } 
     
    });
  });
  