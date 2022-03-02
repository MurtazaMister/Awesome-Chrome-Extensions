var addRippleEffect = function (e) {
    var target = e.target;
    //if (target.tagName.toLowerCase() !== 'button') return false;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    // var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    // var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    var top = e.pageY - rect.top - document.body.scrollTop - ripple.offsetHeight/2 - window.scrollY;
    var left = e.pageX - rect.left - document.body.scrollLeft - ripple.offsetWidth/2 - window.scrollX;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}

$(document).ready(function(){
    console.log("here");
    let buts = document.getElementsByClassName("rippler");
    for (let i = 0; i < buts.length; i++) {
        buts[i].addEventListener('mousedown', addRippleEffect, false);
        buts[i].addEventListener('mouseenter', addRippleEffect, false);
    }
})