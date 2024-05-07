// Function to fetch and display dictionary results in a modal
function searchWord() {
    const searchInput = document.getElementById('dictionaryInput').value;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayDictionaryResultsInModal(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to dynamically display dictionary results in the modal body
  function displayDictionaryResultsInModal(data) {
    const modalBody = document.getElementById('dictionaryModalBody');
    modalBody.innerHTML = '';
  
    // Iterate through each dictionary entry
    data.forEach(entry => {
      const entryElement = document.createElement('div');
      entryElement.classList.add('card', 'mb-3');
  
      const entryBody = document.createElement('div');
      entryBody.classList.add('card-body');
  
      // Display word title
      const wordTitle = document.createElement('h4');
      wordTitle.classList.add('card-title');
      wordTitle.textContent = entry.word;
      entryBody.appendChild(wordTitle);
  
      // Display phonetic details
      entry.phonetics.forEach(phonetic => {
        const phoneticText = document.createElement('p');
        phoneticText.textContent = `Phonetic: ${phonetic.text}`;
        entryBody.appendChild(phoneticText);
      });
  
      // Display meanings and definitions
      entry.meanings.forEach(meaning => {
        const partOfSpeech = document.createElement('h5');
        partOfSpeech.classList.add('card-subtitle', 'mb-2');
        partOfSpeech.textContent = meaning.partOfSpeech;
        entryBody.appendChild(partOfSpeech);
  
        meaning.definitions.forEach(definition => {
          const definitionText = document.createElement('p');
          definitionText.textContent = `Definition: ${definition.definition}`;
          entryBody.appendChild(definitionText);
        });
      });
  
      // Append entry to modal body
      entryElement.appendChild(entryBody);
      modalBody.appendChild(entryElement);
    });
  
    // Open the modal
    $('#dictionaryModal').modal('show');
  }

  // Function to inform the user that login functionality is not available
function validateLogin() {
  alert("Sorry, the login functionality is not available at this point. Please try again later.");
  return false; // Prevent form submission
}

// Function to validate the signup form
function validateForm() {
  // Retrieve input values
  var username = document.getElementById('inputUsername').value;
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  // Validate email format using regular expression
  var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate password complexity using regular expression
  var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least 8 characters, including one uppercase letter, one digit, and one special character.");
    return false;
  }

  // All validations passed, show processing message
  showProcessingMessage();
  return true;
}

// Function to show processing message
function showProcessingMessage() {
  alert("Thank you for signing up! Your information is being processed. You'll receive a notification once everything is ready.");
}