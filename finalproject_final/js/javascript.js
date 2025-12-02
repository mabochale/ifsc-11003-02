// Toggle function to open and close textboxes
function toggleTextbox(id) {
    const textbox = document.getElementById(id);
    if (textbox.style.display === "none" || textbox.style.display === "") {
        textbox.style.display = "block";
    } else {
        textbox.style.display = "none";
    }
}

// Add click event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'toggle-button'
    const toggleButtons = document.querySelectorAll('.toggle-button');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            toggleTextbox(targetId);
        });
    });
    
    // Initialize Slick slider
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 5000,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });
});