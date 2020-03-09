AOS.init();

let bgHead = document.getElementById('show-bg');
let btn1 = document.getElementById('img-1');
let btn2 = document.getElementById('img-2');
let btn3 = document.getElementById('img-3');
let btn4 = document.getElementById('img-4');
let btn5 = document.getElementById('img-5');
let btn6 = document.getElementById('img-6');
let btn7 = document.getElementById('img-7');

btn1.addEventListener('click', function() {
    bgHead.style.background = "url(../img/i.png) no-repeat";
    bgHead.style.backgroundSize = "100% 100%";
    bgHead.style.backgroundPosition = "center";
});

btn2.addEventListener('click', function() {
    bgHead.style.background = "url(../img/will.png) no-repeat";
    bgHead.style.backgroundSize = "100% 100%";
    bgHead.style.backgroundPosition = "center";
});

btn3.addEventListener('click', function() {
    bgHead.style.background = "url(../img/be.png) no-repeat";
    bgHead.style.backgroundSize = "100% 100%";
    bgHead.style.backgroundPosition = "center";
});

btn4.addEventListener('click', function() {
    bgHead.style.background = "url(../img/a.png) no-repeat";
    bgHead.style.backgroundSize = "100% 100%";
    bgHead.style.backgroundPosition = "center";
});

btn5.addEventListener('click', function(){
    bgHead.style.background = "url(../img/developer.png) no-repeat";
    bgHead.style.backgroundSize = "100% 100%";
    bgHead.style.backgroundPosition = "center";
});
btn6.addEventListener('click', function(){
    bgHead.style.background = "url(../img/and.png) no-repeat";
    bgHead.style.backgroundSize = "100% 100%";
    bgHead.style.backgroundPosition = "center";
});
btn7.addEventListener('click', function(){
    bgHead.style.background = "url(../img/designer.png) no-repeat";
    bgHead.style.backgroundSize = "100% 100%";
    bgHead.style.backgroundPosition = "center";
});