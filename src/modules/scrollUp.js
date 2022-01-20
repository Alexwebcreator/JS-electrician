const scrollUp = () => {
  const upBtn = document.querySelector(".up");
  const servicesSection = document.querySelector(".services-section");
  const sectionTop = servicesSection.offsetTop;

  upBtn.style.display = "none";

  upBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const hideBtn = () => {
    if (window.pageYOffset >= sectionTop) {
      upBtn.style.display = 'block';
    } else { upBtn.style.display = 'none'; }
  };

  // if (window.pageYOffset === 0) {
  //   hideBtn();
  // } else {
  //   window.onscroll = hideBtn;
  // }

  window.onscroll = hideBtn;
  // hideBtn();
  // console.log('scroll');

};

export default scrollUp;