const slider = () => {

  const sliderBlock = document.querySelector(".top-slider");
  const  sliderDot = document.querySelector(".slider-dots");
  const  slides = document.querySelectorAll(".item");
  const  timeInterval = 3000;
  let currentSlide = 0;
  let  interval;

  const addDots = () => {
    const newDot = document.createElement('li');
    newDot.classList.add('dot');
    slides.forEach((item, i) => {
      item[i] = newDot.cloneNode(true);
      sliderDot.append(item[i]);
    });
    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');
  };
  addDots();

  const dots = document.querySelectorAll('.dot');

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };  

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'slide-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'slide-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if(!e.target.matches('.dot')) {
      return;
    }

    prevSlide(slides, currentSlide, 'slide-active');
    prevSlide(dots, currentSlide, 'dot-active');
    
  if (e.target.classList.contains('dot')) {
    dots.forEach((dot, index) => {
      if (e.target === dot) {
        currentSlide = index;
      }
    });
  }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    } 

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    } 

    nextSlide(slides, currentSlide, 'slide-active');
    nextSlide(dots, currentSlide, 'dot-active');

  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot')) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if(e.target.matches('.dot')) {
      startSlide(timeInterval);
    }
  }, true);

  startSlide(timeInterval);

};

export default slider;