
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
    // USED WHEN TRIED TO BRING FOCUS TO FIRST ERROR FIELD
    // let firstErrorField = null;

    // REMOVES ERROR-BORDER CLASS FROM ALL FIELDS
    document.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border'));


    // HIDES ALL PREVIOUS ERROR MESSAGES
    const errorMessagesEl = document.querySelectorAll('.error-message');
    errorMessagesEl.forEach(msg => msg.style.display = "none");

    // VALIDATE FULL NAME
    const fullNameField = document.getElementById('full-name');
    const fullName = fullNameField.value.trim();
    if (!fullName) {
        document.getElementById('full-name-error').style.display = 'block';
        fullNameField.classList.add('error-border');  // Add error-border class
        errors++;
        errorMessages.push('Full name is required.');
    
        // failed attemp to bring focus to first error field; brings focus to the field
        // and reads the field info before reading the error messages; tried with both "polite" and "assertive
        // firstErrorField = firstErrorField || 'full-name';
    } 

    // VALIDATE EMAIL
    const emailField = document.getElementById('email');
    const email = emailField.value.trim();
    if (!email) {
        document.getElementById('missing-email').style.display = 'block';
        emailField.classList.add('error-border');  
        errors++;
        errorMessages.push('Email is required.');
    }
    // REPLACED BY THE BUILD-IN HTML5 EMAIL VALIDATION
    // else if (!email.includes('@')) {
    //     document.getElementById('missing-@').style.display = 'block';
    //     errors++;
    //     errorMessages.push("Email must include the at symbol.");
    //     // firstErrorField = firstErrorField || 'email';
    // }

    // VALIDATE MESSAGE
    const messageField = document.getElementById('message');
    const message = messageField.value.trim();
    if (!message) {
        document.getElementById('message-error').style.display = 'block';
        messageField.classList.add('error-border');  // Add error-border class
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
