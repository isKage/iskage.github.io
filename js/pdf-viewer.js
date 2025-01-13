document.addEventListener("DOMContentLoaded", function () {
    const fullscreenBtn = document.querySelector(".fullscreen-btn");
    const container = document.querySelector("#pdf-container");
    const iframe = document.querySelector("#pdf-frame");
  
    fullscreenBtn.addEventListener("click", function () {
      if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        // 已经在全屏模式，退出全屏
        exitFullscreen();
      } else {
        // 进入全屏模式
        enterFullscreen();
      }
    });
  
    // 进入全屏模式
    function enterFullscreen() {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen(); // Safari
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen(); // IE11
      }
    }
  
    // 退出全屏模式
    function exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE11
      }
    }
  
    // 更新按钮文本并调整 iframe 大小
    container.addEventListener("fullscreenchange", updateButtonText);
    container.addEventListener("webkitfullscreenchange", updateButtonText);
    container.addEventListener("msfullscreenchange", updateButtonText);
  
    function updateButtonText() {
      if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        fullscreenBtn.textContent = "退出全屏"; // 进入全屏时更新按钮文本
        iframe.style.width = "100vw"; // 全屏宽度
        iframe.style.height = "100vh"; // 全屏高度
      } else {
        fullscreenBtn.textContent = "全屏模式"; // 退出全屏时恢复按钮文本
        iframe.style.width = "100%"; // 恢复正常宽度
        iframe.style.height = "600px"; // 恢复正常高度
      }
    }
  });