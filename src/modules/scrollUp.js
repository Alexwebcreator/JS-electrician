const scrollUp = () => {
  const upBtn = document.querySelector(".up");
  const servicesSection = document.querySelector(".services-section");
  const sectionTop = servicesSection.offsetTop;

  upBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const hideBtn = () => {
    if (window.pageYOffset >= sectionTop) {
      upBtn.style.display = 'block';
    } else { upBtn.style.display = 'none'; }
  };

  window.onscroll = hideBtn;

};

export default scrollUp;