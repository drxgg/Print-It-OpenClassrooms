const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlideIndex = 0;

const leftArrowButton = document.querySelector(".arrow_left");
const rightArrowButton = document.querySelector(".arrow_right");
const slideDotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  slideDotsContainer.prepend(dot);
}

let slideDotElements = document.querySelectorAll(".dot");
slideDotElements[currentSlideIndex].classList.add("dot_selected");

leftArrowButton.addEventListener("click", previousSlide);
rightArrowButton.addEventListener("click", nextSlide);

function showSlide() {
  let bannerImg = document.querySelector(".banner-img");
  let bannerText = document.querySelector("#banner p");

  bannerImg.src =
    "./assets/images/slideshow/" + slides[currentSlideIndex].image;
  bannerText.innerHTML = slides[currentSlideIndex].tagLine;
}

function previousSlide() {
  slideDotElements[currentSlideIndex].classList.remove("dot_selected");
  if (currentSlideIndex == 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex--;
  }
  slideDotElements[currentSlideIndex].classList.add("dot_selected");
  showSlide();
}

function nextSlide() {
  slideDotElements[currentSlideIndex].classList.remove("dot_selected");
  if (currentSlideIndex == slides.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }
  slideDotElements[currentSlideIndex].classList.add("dot_selected");
  showSlide();
}
