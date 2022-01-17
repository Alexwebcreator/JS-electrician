const carousel = () => {
  const serviceCarousel = document.querySelectorAll(".services-carousel");
  const  arrowLeft = document.querySelector(".arrow-left");
  const  arrowRight = document.querySelector(".arrow-right");
  let  current = 0;
  
  const reset = () => {
    for (let i = 0; i < serviceCarousel.length; i++) {
      serviceCarousel[i].style.display = "none";
    }
  };

  const startSlide = () => {
    reset();
    serviceCarousel[0].style.display = "block";
  };

  const slideLeft = () => {
    reset();
    serviceCarousel[current - 1].style.display = "block";
    current--;
  };

  const slideRight = () => {
    reset();
    serviceCarousel[current + 1].style.display = "block";
    current++;
  };

  arrowLeft.addEventListener("click", () => {
    if (current === 0) {
      current = serviceCarousel.length;
    }
    slideLeft();
  });

  arrowRight.addEventListener("click", () => {
    if (current === serviceCarousel.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();

};

export default carousel;