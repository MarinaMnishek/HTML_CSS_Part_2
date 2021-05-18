let button = document.querySelector('.menu');
let nav = document.querySelector('.nav-main-dropdown');
let btn = document.querySelector('.btn-nav-main');

button.onclick = function () {
    nav.classList.toggle('open');
    nav.classList.toggle('close');
};
btn.onclick = function () {
    nav.classList.toggle('close');
};

var links = ["img/slider.jpg", "img/slider1.jpg", "img/slider2.jpg"];
var index = 0;
var element = document.getElementById('img');

function slide(v) {

    index = index + 1 * v;
    if (index > links.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = links.length - 1;
    }
    element.src = links[index];


}