function numberToBinaryString(number) {
  result = "";
  while (number > 0) {
    result = (number % 2 == 1 ? "●" : "○") + result;
    number = Math.floor(number / 2);
  }
  return result.padStart(6, "○");
}

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("time").textContent = `${numberToBinaryString(
    hours
  )}:${numberToBinaryString(minutes)}:${numberToBinaryString(seconds)}`;
}

setInterval(updateTime, 200); // 매 초마다 시간을 업데이트
