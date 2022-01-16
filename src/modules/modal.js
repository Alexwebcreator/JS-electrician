import { animate } from "./helpers";

const modal = () => {

  const callback = document.getElementById('callback');
  const overlay = document.querySelector('.modal-overlay');
  const buttons = document.querySelectorAll('.callback-btn');
  const servicesBtn = document.querySelector('.button-services');
  
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
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openCallback();
    });
  });

  servicesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openCallback();
  });

  callback.addEventListener("click", (e) => {
    if (e.target.closest('.modal-close')) {
      e.preventDefault();
      closeCallback();
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.preventDefault();
      closeCallback();
    }
  });

};

export default modal;