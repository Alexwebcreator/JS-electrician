import { animate } from "./helpers";

const modal = () => {

  const callback = document.getElementById('callback');
  const overlay = document.querySelector('.modal-overlay');
  const buttons = document.querySelectorAll('.callback-btn');
  const servicesBtn = document.querySelector('.button-services');
  
  console.log(servicesBtn);
  
  const openCallback = () => {
    callback.style.display = "block";
    overlay.style.display = "block";
    if (screen.width > 768) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          callback.style.opacity =progress;
          overlay.style.opacity =progress;
        },
      });
    }
  };

  const closeCallback = () => {
    if (screen.width > 768) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return 1 - timeFraction;
        },
        draw(progress) {
          callback.style.opacity =progress;
          overlay.style.opacity =progress;
        },
      });
      setTimeout(() => {
        callback.style.display = "none";
        callback.style.opacity = "";
        overlay.style.display = "none";
        overlay.style.opacity = "";
      }, 100);
    } else {
      callback.style.display = "none";
      callback.style.opacity = "";
      overlay.style.display = "none";
      overlay.style.opacity = "";
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", openCallback);
  });

  servicesBtn.addEventListener("click", openCallback);

  callback.addEventListener("click", (e) => {
    if (e.target.closest('.modal-close')) {
      closeCallback();
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeCallback();
    }
  });

};

export default modal;