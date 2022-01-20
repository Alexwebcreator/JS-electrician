import modal from './modules/modal';
import slider from './modules/slider';
import carousel from './modules/carousel';
import linkScroll from './modules/linkScroll';
import scrollUp from './modules/scrollUp';
import accordeon from './modules/accordeon';
import sendForm from './modules/sendForm';

modal();
slider();
carousel();
linkScroll();
scrollUp();
accordeon();
sendForm({
  someElem: [
    {
      type: 'block',
    }
  ] 
});