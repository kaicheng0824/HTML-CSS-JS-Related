var theHour = document.querySelector('.hour');
var theMinute = document.querySelector('.min');
var theSec = document.querySelector('.sec');

setInterval(function() {
  var today = new Date();
  theHour.innerHTML = (today.getHours()-12).toString().padStart(2, '0');
  theMinute.innerHTML = today.getMinutes().toString().padStart(2, '0');
  theSec.innerHTML = today.getSeconds().toString().padStart(2, '0');
}, 100)
