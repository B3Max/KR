$(document).ready(function () {
  $(".right").animated("fadeInDown", "fadeOutUp");
  $('.left').animated("fadeInDown", "fadeOutUp");

  if (window.innerWidth > 768) {
    var script = document.createElement('script');
    script.src = 'js/scroll.js';
    document.head.appendChild(script);
  }
});

