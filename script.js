document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const userNameInput = document.getElementById('userName');
    const greetingDiv = document.getElementById('greeting');
    const clearButton = document.getElementById('clearButton');
  
    nameForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const userName = userNameInput.value;
      localStorage.setItem('user', userName);
      displayGreeting();
    });
  
    clearButton.addEventListener('click', function() {
      localStorage.removeItem('user');
      displayGreeting();
    });
  
    function displayGreeting() {
      const storedName = localStorage.getItem('user');
      if (storedName) {
        greetingDiv.textContent = `Welcome back, ${storedName}!`;
      } else {
        greetingDiv.textContent = 'Hello there!';
      }
    }
  
    displayGreeting();
  });
  