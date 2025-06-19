// Tempo da contagem: 10 minutos a partir de agora
let countdownTime = new Date().getTime() + (10 * 60 * 1000);

let countdownInterval = setInterval(function() {
  let now = new Date().getTime();
  let distance = countdownTime - now;

  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let countdownElement = document.getElementById("countdown-timer");

  if (distance > 0) {
    countdownElement.innerHTML =
      (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  } else {
    clearInterval(countdownInterval);
    document.getElementById("countdown-bar").innerHTML = "❌ Oferta encerrada. Página fora do ar.";
  }
}, 1000);
