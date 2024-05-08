// 시계기능
const clock = document.querySelector("#clock");

function ShowTime() {
  const now = new Date();
  const hourStr = String(now.getHours()).padStart(2, "0");
  const minuteStr = String(now.getMinutes()).padStart(2, "0");
  const secondStr = String(now.getSeconds()).padStart(2, "0");
  clock.innerText = `${hourStr}: ${minuteStr}: ${secondStr}`;
}

setInterval(ShowTime, 1000);
