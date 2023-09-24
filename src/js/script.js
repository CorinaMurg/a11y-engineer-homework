
// CLOSE GREAT-DAY MESSAGE
document.getElementById('great-day--button').addEventListener('click', function() {
    document.getElementById('great-day').style.display = 'none';
}); 


// FORM VALIDATION
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const formError = document.getElementById('form-error');

  const fields = [
    { id: 'full-name', errorMsgId: 'full-name-error', errMsg: 'Full name is required.' },
    { id: 'email', errorMsgId: 'missing-email', errMsg: 'Email is required.' },
    { id: 'message', errorMsgId: 'message-error', errMsg: 'Message is required.' }
  ];

  const removeError = (fieldId, errorMsgId) => {
    const field = document.getElementById(fieldId);
    field.addEventListener('input', function() {
      if (this.value.trim()) {
        document.getElementById(errorMsgId).style.display = 'none';
        this.classList.remove('error-border');
      }
    });
  };

  fields.forEach(({ id, errorMsgId }) => removeError(id, errorMsgId));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let errors = 0;
    let errorMessages = [];

    document.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border'));

    const errorMessagesEl = document.querySelectorAll('.error-message');
    errorMessagesEl.forEach(msg => msg.style.display = "none");

    fields.forEach(({ id, errorMsgId, errMsg }) => {
      const fieldElement = document.getElementById(id);
      const value = fieldElement.value.trim();

      if (!value) {
        document.getElementById(errorMsgId).style.display = 'block';
        fieldElement.classList.add('error-border');
        errors++;
        errorMessages.push(errMsg);
      }
    });

    if (errors > 0) {
      const errorNoun = errors === 1 ? 'error' : 'errors';
      const errorVerb = errors === 1 ? 'is' : 'are';
      formError.textContent = `There ${errorVerb} ${errors} ${errorNoun} in your submission. ${errorMessages.join(" ")}`;
    }
  });
});
