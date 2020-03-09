$(document).ready(function() {

    $(".hamburger").click(function() {
        $(".wrapper").toggleClass("collapse")
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}

AOS.init();