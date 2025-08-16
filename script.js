// Filter Images
function filterImages(category, btn) {
  let images = document.querySelectorAll(".gallery-item");
  let buttons = document.querySelectorAll(".filter-btn");

  // active button style
  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

// Lightbox
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let captionText = document.getElementById("caption");

let galleryItems = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.onclick = function() {
    lightbox.style.display = "flex";
    lightboxImg.src = this.src;
    captionText.innerHTML = this.alt;
    currentIndex = index;
  };
});

function closeLightbox() {
  lightbox.style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightbox();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateLightbox();
}

function updateLightbox() {
  let img = galleryItems[currentIndex];
  lightboxImg.src = img.src;
  captionText.innerHTML = img.alt;
}