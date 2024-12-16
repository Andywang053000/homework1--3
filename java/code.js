// 隨機選擇 1 到 100 的數字
let randomNumber = Math.floor(Math.random() * 100) + 1;

// 獲取 HTML 元素
const guessInput = document.getElementById("guess");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const message = document.getElementById("message");

// 處理提交按鈕事件
submitBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  // 確保輸入有效
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "請輸入 1 到 100 之間的數字！";
    return;
  }

  // 檢查玩家的猜測
  if (userGuess === randomNumber) {
    message.textContent = `恭喜！你猜對了，答案是 ${randomNumber}！`;
    message.style.color = "green";
    gameOver();
  } else if (userGuess < randomNumber) {
    message.textContent = "太小了，再試一次！";
    message.style.color = "blue";
  } else {
    message.textContent = "太大了，再試一次！";
    message.style.color = "blue";
  }

  // 清空輸入欄
  guessInput.value = "";
});

// 處理重新開始按鈕事件
restartBtn.addEventListener("click", () => {
  // 重置遊戲狀態
  randomNumber = Math.floor(Math.random() * 100) + 1;
  message.textContent = "";
  message.style.color = "#333";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
});

// 遊戲結束處理
function gameOver() {
  guessInput.disabled = true;
  submitBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}
