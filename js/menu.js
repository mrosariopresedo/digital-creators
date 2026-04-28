var btn = document.getElementById('hamburger');
var menu = document.getElementById('nav-menu');

btn.addEventListener('click', function () {
    menu.classList.toggle('abierto');
});
