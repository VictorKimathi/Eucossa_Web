// Selects all elements with the class 'panel' and stores them in a NodeList called 'panels'
const panels = document.querySelectorAll('.panel');

// Loops through each panel and adds a click event listener to it
panels.forEach(panel => {
    // When a panel is clicked, the following function runs
    panel.addEventListener('click', () => {
        // Calls the removeActiveClasses function to remove the 'active' class from all panels
        removeActiveClasses();
        // Adds the 'active' class to the clicked panel, making it expand
        panel.classList.add('active');
    });
});

// Function to remove the 'active' class from all panels, ensuring only one panel can be active at a time
function removeActiveClasses() {
    panels.forEach(panel => {
        // Removes the 'active' class from each panel
        panel.classList.remove('active');
    });
}
