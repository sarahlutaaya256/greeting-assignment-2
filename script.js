document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const userNameInput = document.getElementById('userName');
    const greetingDiv = document.getElementById('greeting');
    const clearButton = document.getElementById('clearButton');

     const storedName = localStorage.getItem('user');
    
    //  if (storedName) {
    //   displayGreeting(storedName);
    // } else {
    //   displayGreeting();
    // }
    
    nameForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const userName = userNameInput.value;
      localStorage.setItem('user', userName);
      displayGreeting(storedName);
    });
  
    clearButton.addEventListener('click', function() {
      localStorage.removeItem('user');
      displayGreeting();
    });
  
    function displayGreeting(name) {
      if (name) {
        greetingDiv.textContent = `Welcome back, ${name}!`;
      } else {
        greetingDiv.textContent = 'Hello there!';
      }
    }
  });
  
