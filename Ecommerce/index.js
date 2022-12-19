// Menu for mobile
function copyMenu(){
    // copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    var mainNav = document.querySelector('.header-nav');
    var newPlace = document.querySelector('.off-canvas nav');
    newPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();


// Showing the mobile menu 
const menuButton = document.querySelector('.trigger'), 
      closeButton = document.querySelector('t-close'),
      addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addClass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addClass.classList.remove('showmenu')
})




// Showing sub menu on mobile
const subMenu = document.querySelector('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') :null);
    if (this.closest ('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });