document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const userNameInput = document.getElementById('userName');
    const greetingDiv = document.getElementById('greeting');
    const clearButton = document.getElementById('clearButton');

    var storedName = localStorage.getItem('user');
    
    //var removeName = localStorage.removeItem('user');
  
    nameForm.addEventListener('submit', function(event) {
      const userName = userNameInput.value;
      localStorage.setItem('user', userName);
      displayGreeting(storedName);
    });
  
    clearButton.addEventListener('click', function() {
      localStorage.removeItem('user');
      
      displayGreeting();
    });
  
    function displayGreeting(storedName) {
      
      if (storedName) {
        greetingDiv.textContent = `Welcome back, ${storedName}!`;
      } else {
        greetingDiv.textContent = 'Hello there!';
      }
    }
  
    displayGreeting(storedName);
  });
  