document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add("loaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
  }
});
document.addEventListener("DOMContentLoaded", function() {
  let lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  
  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.backgroundImage = `url('${entry.target.dataset.bg}')`;
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  } else {
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackground.style.backgroundImage = `url('${lazyBackground.dataset.bg}')`;
    });
  }
});
function updateTime() {
  const now = new Date();
  const options = { 
    timeZone: 'America/Indiana/Indianapolis',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const dateTimeString = now.toLocaleString('en-US', options);
  document.getElementById('time').textContent = dateTimeString + " | Auburn, IN";
//  document.getElementById('time').textContent = dateTimeString + " - Auburn, IN 46706";
}

function updateTimer() {
  const now = new Date();
  const options = { 
    timeZone: 'America/Indiana/Indianapolis',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const dateTimeString = now.toLocaleString('en-US', options);
  document.getElementById('timer').textContent = dateTimeString + " | Auburn, IN";
//  document.getElementById('timer').textContent = dateTimeString + " - Auburn, IN 46706";
}

updateTimer();
setInterval(updateTimer, 1000);
updateTime();
setInterval(updateTime, 1000);

document.getElementById('currentYear').textContent = new Date().getFullYear();
