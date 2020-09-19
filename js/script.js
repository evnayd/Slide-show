'use strict';

var buttons = document.getElementsByClassName('slide__button');
console.log(buttons);
var slides = document.getElementsByClassName('slide');

/*for (var k = 0; k < buttons.length; k++) {
buttons[k].onclick = function () {
   if (activeEl.nextElementSibling) {
       activeEl.setAttribute('style', 'margin-left: -100vw');
       activeEl.classList.remove('active');
       activeEl.nextElementSibling.classList.add('active');
       picture.classList.add('animate__pic');
       text.classList.add('animate__text');
   }
}
}*/
for (var i = 0; i < buttons.length; i++) {
buttons[i].addEventListener('click', function() {
    var activeEl = document.querySelector('.active');
    var picture = activeEl.nextElementSibling.querySelector('.slide__picture');
    var text = activeEl.nextElementSibling.querySelector('.slide__text');
    if (activeEl.nextElementSibling) {
        activeEl.setAttribute('style', 'margin-left: -100vw');
        activeEl.classList.remove('active');
        activeEl.nextElementSibling.classList.add('active');
        picture.classList.add('animate__pic');
        text.classList.add('animate__text');
    }
    })

    buttons[i].addEventListener('keydown', function(evt) {
        var activeEl = document.querySelector('.active');
        var picture = activeEl.nextElementSibling.querySelector('.slide__picture');
        var text = activeEl.nextElementSibling.querySelector('.slide__text');
        if (evt.key === 'Enter' && activeEl.nextElementSibling) {
            activeEl.setAttribute('style', 'margin-left: -100vw');
            activeEl.classList.remove('active');
            activeEl.nextElementSibling.classList.add('active');
            picture.classList.add('animate__pic');
            text.classList.add('animate__text');
        }
})
}
