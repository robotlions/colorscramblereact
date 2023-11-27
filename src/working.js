// Function to check if the user has scrolled to the bottom
function isBottomOfPage() {
    // Calculate the distance from the top of the page to the bottom of the viewport
    const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);
  
    // Check if the user is near the bottom (you can adjust the threshold as needed)
    return distanceToBottom < 100;
  }
  
  // Function to add content when the user scrolls to the bottom
  function addContent() {
    // Add your content creation logic here
    const newContent = document.createElement('div');
    newContent.textContent = 'New content added!';
    document.body.appendChild(newContent);
  }
  
  // Event listener for the scroll event
  window.addEventListener('scroll', function () {
    // Check if the user has scrolled to the bottom
    if (isBottomOfPage()) {
      // Add content when the user reaches the bottom
      addContent();
    }
  });
  