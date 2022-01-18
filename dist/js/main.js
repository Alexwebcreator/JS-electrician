/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n/* harmony import */ var _modules_linkScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/linkScroll */ \"./modules/linkScroll.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollUp */ \"./modules/scrollUp.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_linkScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n  const serviceCarousel = document.querySelectorAll(\".services-carousel\");\r\n  const  arrowLeft = document.querySelector(\".arrow-left\");\r\n  const  arrowRight = document.querySelector(\".arrow-right\");\r\n  let  current = 0;\r\n  \r\n  const reset = () => {\r\n    for (let i = 0; i < serviceCarousel.length; i++) {\r\n      serviceCarousel[i].style.display = \"none\";\r\n    }\r\n  };\r\n\r\n  const startSlide = () => {\r\n    reset();\r\n    serviceCarousel[0].style.display = \"block\";\r\n  };\r\n\r\n  const slideLeft = () => {\r\n    reset();\r\n    serviceCarousel[current - 1].style.display = \"block\";\r\n    current--;\r\n  };\r\n\r\n  const slideRight = () => {\r\n    reset();\r\n    serviceCarousel[current + 1].style.display = \"block\";\r\n    current++;\r\n  };\r\n\r\n  arrowLeft.addEventListener(\"click\", () => {\r\n    if (current === 0) {\r\n      current = serviceCarousel.length;\r\n    }\r\n    slideLeft();\r\n  });\r\n\r\n  arrowRight.addEventListener(\"click\", () => {\r\n    if (current === serviceCarousel.length - 1) {\r\n      current = -1;\r\n    }\r\n    slideRight();\r\n  });\r\n\r\n  startSlide();\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/linkScroll.js":
/*!*******************************!*\
  !*** ./modules/linkScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst linkScroll = () => {\r\n  document.querySelectorAll('a[href^=\"#\"]').forEach((link) => {\r\n    link.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      const id = link.getAttribute('href');\r\n\r\n      document.querySelector(id).scrollIntoView({\r\n        behavior: \"smooth\",\r\n      });\r\n    });\r\n  });\r\n\r\n  document.querySelector(\".logo\").addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    window.scrollTo({ top: 0, behavior: \"smooth\" });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkScroll);\n\n//# sourceURL=webpack:///./modules/linkScroll.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n\r\n  const callback = document.getElementById('callback');\r\n  const overlay = document.querySelector('.modal-overlay');\r\n  const buttons = document.querySelectorAll('.callback-btn');\r\n  const servicesBtn = document.querySelector('.button-services');\r\n  const carouselBtn = document.querySelectorAll('.absolute');\r\n  \r\n  const openCallback = () => {\r\n    callback.style.display = \"block\";\r\n    overlay.style.display = \"block\";\r\n    if (screen.width > 768) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 500,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          callback.style.opacity =progress;\r\n          overlay.style.opacity =progress;\r\n        },\r\n      });\r\n    }\r\n  };\r\n\r\n  const closeCallback = () => {\r\n    if (screen.width > 768) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 500,\r\n        timing(timeFraction) {\r\n          return 1 - timeFraction;\r\n        },\r\n        draw(progress) {\r\n          callback.style.opacity =progress;\r\n          overlay.style.opacity =progress;\r\n        },\r\n      });\r\n      setTimeout(() => {\r\n        callback.style.display = \"none\";\r\n        callback.style.opacity = \"\";\r\n        overlay.style.display = \"none\";\r\n        overlay.style.opacity = \"\";\r\n      }, 100);\r\n    } else {\r\n      callback.style.display = \"none\";\r\n      callback.style.opacity = \"\";\r\n      overlay.style.display = \"none\";\r\n      overlay.style.opacity = \"\";\r\n    }\r\n  };\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      openCallback();\r\n    });\r\n  });\r\n\r\n  servicesBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    openCallback();\r\n  });\r\n\r\n  carouselBtn.forEach((btn) => {\r\n    btn.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      openCallback();\r\n    });\r\n  });\r\n\r\n  callback.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest('.modal-close')) {\r\n      e.preventDefault();\r\n      closeCallback();\r\n    }\r\n  });\r\n\r\n  overlay.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains('modal-overlay')) {\r\n      e.preventDefault();\r\n      closeCallback();\r\n    }\r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollUp.js":
/*!*****************************!*\
  !*** ./modules/scrollUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollUp = () => {\r\n  const upBtn = document.querySelector(\".up\");\r\n  const servicesSection = document.querySelector(\".services-section\");\r\n  const sectionTop = servicesSection.offsetTop;\r\n\r\n  upBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    window.scrollTo({ top: 0, behavior: \"smooth\" });\r\n  });\r\n\r\n  const hideBtn = () => {\r\n    if (window.pageYOffset >= sectionTop) {\r\n      upBtn.style.display = 'block';\r\n    } else { upBtn.style.display = 'none'; }\r\n  };\r\n\r\n  window.onscroll = hideBtn;\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack:///./modules/scrollUp.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n\r\n  const sliderBlock = document.querySelector(\".top-slider\");\r\n  const  sliderDot = document.querySelector(\".slider-dots\");\r\n  const  slides = document.querySelectorAll(\".item\");\r\n  const  timeInterval = 3000;\r\n  let currentSlide = 0;\r\n  let  interval;\r\n\r\n  const addDots = () => {\r\n    const newDot = document.createElement('li');\r\n    newDot.classList.add('dot');\r\n    slides.forEach((item, i) => {\r\n      item[i] = newDot.cloneNode(true);\r\n      sliderDot.append(item[i]);\r\n    });\r\n    const dot = document.querySelectorAll('.dot');\r\n    dot[0].classList.add('dot-active');\r\n  };\r\n  addDots();\r\n\r\n  const dots = document.querySelectorAll('.dot');\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };  \r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'slide-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, 'slide-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if(!e.target.matches('.dot')) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'slide-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n    \r\n  if (e.target.classList.contains('dot')) {\r\n    dots.forEach((dot, index) => {\r\n      if (e.target === dot) {\r\n        currentSlide = index;\r\n      }\r\n    });\r\n  }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    } \r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    } \r\n\r\n    nextSlide(slides, currentSlide, 'slide-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n\r\n  });\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches('.dot')) {\r\n      stopSlide();\r\n    }\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if(e.target.matches('.dot')) {\r\n      startSlide(timeInterval);\r\n    }\r\n  }, true);\r\n\r\n  startSlide(timeInterval);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;