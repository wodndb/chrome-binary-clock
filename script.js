function numberToBinaryString(number) {
  result = "";
  while (number > 0) {
    result = (number % 2 == 1 ? "●" : "○") + result;
    number = Math.floor(number / 2);
  }
  return result.padStart(6, "○");
}

function timeToBinaryString(time) {
  return (
    numberToBinaryString(time.getHours()) +
    ":" +
    numberToBinaryString(time.getMinutes()) +
    ":" +
    numberToBinaryString(time.getSeconds())
  );
}

function timeToString(time) {
  return (
    String(time.getHours()).padStart(2, "0") +
    ":" +
    String(time.getMinutes()).padStart(2, "0") +
    ":" +
    String(time.getSeconds()).padStart(2, "0")
  );
}

function updateTime() {
  const now = new Date();
  document.getElementById("bin-time").textContent = timeToBinaryString(now);
  document.getElementById("deci-time").textContent = timeToString(now);
}

setInterval(updateTime, 200); // 매 초마다 시간을 업데이트
