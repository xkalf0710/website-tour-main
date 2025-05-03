function initializeSlider(sliderContainer) {
    const slider = sliderContainer.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const prevButton = sliderContainer.querySelector('.previ');
    const nextButton = sliderContainer.querySelector('.nexti');

    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });
}

// Initialize all sliders
document.querySelectorAll('.slider-container').forEach(initializeSlider);

