function showTime() {
  var now = new Date();
  var comet = new Date(2061, 5, 28, 0, 0, 0, 0);
  var difference = comet - now;

  var seconds = Math.floor((difference / 1000) % 60);
  var minutes = Math.floor((difference / 1000 / 60) % 60);
  var hours = Math.floor((difference / 1000 / 60 / 60) % 24);
  var days = Math.floor((difference / 1000 / 60 / 60 / 24) % 365);
  var years = Math.floor(difference / 1000 / 60 / 60 / 24 / 365);

  document.querySelector(".years").innerHTML = years + "<br>" + "Лет";
  document.querySelector(".days").innerHTML = days + "<br>" + "Дней";
  document.querySelector(".hours").innerHTML = hours + "<br>" + "Часов";
  document.querySelector(".minutes").innerHTML = minutes + "<br>" + "Минут";
  document.querySelector(".seconds").innerHTML = seconds + "<br>" + "Секунд";

  setTimeout("showTime()", 1000);
}