const accordeon = () => {
  const elements = document.querySelectorAll('.accordeon>.element');
  const elementContent = document.querySelectorAll('.element-content');
  let i;

  const removeClass = () => {
    elements.forEach((element) => {
      element.classList.remove('active');
    });

    elementContent.forEach((elem) => {
      elem.classList.remove('acc-visible');
    });
  };

  for (i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      removeClass();

      this.classList.toggle("active");
      let blocks = this.children;
      Array.from(blocks).forEach((em) => {
        em.classList.toggle("acc-visible");
      });
    };
  }

};

export default accordeon;