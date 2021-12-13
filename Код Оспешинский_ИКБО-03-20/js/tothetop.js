$(document).on("click", ".tothetop", function (e) {
    e.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 800);
});