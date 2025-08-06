const filterButtons = document.querySelectorAll('.filter-button');
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let visibleImages = Array.from(galleryImages); // Initial all images

// Filter buttons logic
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    galleryImages.forEach(img => {
      if (filter === 'all' || img.getAttribute('data-category') === filter) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });

    visibleImages = Array.from(document.querySelectorAll('.gallery img'))
      .filter(img => img.style.display !== 'none');
  });
});

// Image click to open Lightbox
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
  
  
    visibleImages = Array.from(document.querySelectorAll('.gallery img'))
      .filter(img => img.style.display !== 'none');

    currentIndex = visibleImages.indexOf(img);
    showImage(currentIndex);
    lightbox.style.display = 'flex';
  });
});

// Show image in Lightbox
function showImage(index) {
  lightboxImage.src = visibleImages[index].src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next and Previous Buttons
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % visibleImages.length;
  showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  showImage(currentIndex);
});
