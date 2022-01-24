const menu = () => {
  const menu = document.querySelector('.mobile-menu');
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let menu_is_active = menu.classList.contains('open');
    if (e.target.closest('.mob-menu-btn')) {
      menu.classList.toggle('open');
    } else if (!its_menu && menu_is_active || e.target.classList.contains('mobile-menu-close') || e.target.closest('.mobile-menu')) {
      menu.classList.remove('open');
    }
  });
  
};

export default menu;