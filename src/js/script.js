
// CLOSE GREAT-DAY MESSAGE
document.getElementById('great-day--button').addEventListener('click', function() {
    document.getElementById('great-day').style.display = 'none';
}); 

// FORM VALIDATION
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const formError = document.getElementById('form-error');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let errors = 0;
    let errorMessages = [];
    let firstErrorField = null;

    // Hide all previous error messages
    const errorMessagesEl = document.querySelectorAll('.error-message');
    errorMessagesEl.forEach(msg => msg.style.display = "none");

    // Validate Full Name
    const fullName = document.getElementById('full-name').value.trim();
    if (!fullName) {
        document.getElementById('full-name-error').style.display = 'block';
        errors++;
        errorMessages.push('Full name is required.');
        // failed attemp to bring focus to first error field; brings focus to the field
        // and reads the field info before reading the error messages; tried with both "polite" and "assertive
        // firstErrorField = firstErrorField || 'full-name';
    } 

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (!email) {
        document.getElementById('missing-email').style.display = 'block';
        errors++;
        errorMessages.push('Email is required.');
        // firstErrorField = firstErrorField || 'email';
    } 
    // else if (!email.includes('@')) {
    //     document.getElementById('missing-@').style.display = 'block';
    //     errors++;
    //     errorMessages.push("Email must include the at symbol.");
    //     // firstErrorField = firstErrorField || 'email';
    // }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('message-error').style.display = 'block';
        errors++;
        errorMessages.push('Message is required.');
        // firstErrorField = firstErrorField || 'message';
    }

    const errorNoun = errors === 1 ? 'error' : 'errors';
    const errorVerb = errors === 1 ? 'is' : 'are';
    if (errors > 0) {
      formError.textContent = `There ${errorVerb} ${errors} ${errorNoun} in your submission. ${errorMessages.join(" ")}`;
      // document.getElementById(firstErrorField).focus();
    }
  });
});
