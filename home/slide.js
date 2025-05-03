document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    const totalSlides = Math.ceil(slider.children.length / 3); // 3 items per slide
    let currentSlide = 0;
  
    // Function to update the slider to show the current slide
    function updateSlide() {
      const offset = -currentSlide * 1225; // 1225px is the width of the .slider-container
      slider.style.transform = `translateX(${offset}px)`; // Move slider
    }
  
    // Move to the previous slide
    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = totalSlides - 1; // Loop back to the last slide
      }
      updateSlide(); // Apply the new slide transformation with animation
    });
  
    // Move to the next slide
    nextButton.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
      } else {
        currentSlide = 0; // Loop back to the first slide
      }
      updateSlide(); // Apply the new slide transformation with animation
    });
  });
  