let slideIndex = 1;

function showSlides(n) {
  let i;
  slides = document.querySelectorAll(".each__slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function prev() {
  showSlides(slideIndex--);
}

function next() {
  showSlides(slideIndex++);
}



// function showSlides(n) {
//   let i;
// let slideIndex = 1;
//   slides = document.querySelectorAll(".each__slide");
//   let slideToShow=3;
// let totalSlides = slides.length;
//   if (n > totalSlides-slideToShow+1) {slideIndex = 1}
//   if (n < totalSlides-slideToShow+1) {slideIndex = totalSlides-slideToShow}
//   for (i = 0; i < slideIndex+totalSlides-1; i++) {
//     slides[i].style.display = "block";
//   }
//   slides[slideIndex-1].style.display = "noe";
// }

// function prev() {
//   showSlides(slideIndex-=n);
// }

// function next() {
//   showSlides(slideIndex+=n);
// }

