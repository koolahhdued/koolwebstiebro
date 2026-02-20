// your code goes here
document.addEventListener('DOMContentLoaded', () => {
  const typewriterBox = document.getElementById('typewriter-box');
  const typedTextSpan = document.getElementById('typed-text');
  const cursorSpan = document.getElementById('cursor');

  const textToType = "blu blee blu blah place holder text so tuff boi";
  let charIndex = 0;
  let typingSpeed = 40; // milliseconds per character
  let typingTimeout;

  function typeWriter() {
    if (charIndex < textToType.length) {
      typedTextSpan.textContent += textToType.charAt(charIndex);
      charIndex++;
      typingTimeout = setTimeout(typeWriter, typingSpeed);
    } else {
      // Typing complete, you can optionally hide the cursor or perform other actions
      cursorSpan.style.display = 'none'; 
    }
  }

  typewriterBox.addEventListener('click', () => {
    // Reset if already typing or restart
    clearTimeout(typingTimeout);
    typedTextSpan.textContent = '';
    charIndex = 0;
    cursorSpan.style.display = 'inline'; // Show cursor
    typeWriter(); // Start typing
  });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the image element by its ID
    const imageElement = document.getElementById('myImage');

    // Check if the element exists before adding the listener
    if (imageElement) {
        // 2. Add a click event listener
        imageElement.addEventListener('click', () => {
            // 3. The magic line: .toggle() adds the class if it's missing 
            //    and removes it if it's already there.
            imageElement.classList.toggle('active');
        });
    }
});
document.addEventListener('keydown', function(event) {
  if(event.key.toLowerCase() === 'z') {
    const plainTextContainer = document.getElementById('plainTextContainer');
    if (plainTextContainer) {
      const currentDisplay = window.getComputedStyle(plainTextContainer).display;
      if (currentDisplay === 'none') {
        plainTextContainer.style.display = 'block';
      } else {
        plainTextContainer.style.display = 'none';
      }
    }
  }
});
document.getElementById('openPopup').addEventListener('click', function() {
  document.getElementById('myPopup').style.display = 'block';
  // Optional: Show overlay
  // document.querySelector('.overlay').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('myPopup').style.display = 'none';
  // Optional: Hide overlay
  // document.querySelector('.overlay').style.display = 'none';
});
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



