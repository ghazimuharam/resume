var menu_btn = document.getElementById('menu-button');
var mobile_menu = document.getElementById('mobile-menu');
var mobile_hamburger = document.getElementById('menu-hmbgr');
var mobile_close = document.getElementById('menu-close');

menu_btn.addEventListener('click', function () {
    mobile_hamburger.classList.toggle('hidden');
    mobile_menu.classList.toggle('hidden');
    mobile_close.classList.toggle('hidden');
});