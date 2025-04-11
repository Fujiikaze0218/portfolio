// 等頁面加載完成後執行
document.addEventListener("DOMContentLoaded", function() {
    // 取得 <h1> 標題
    const title = document.querySelector("h1");
  
    // 當標題被點擊時，改變顏色並顯示訊息
    title.addEventListener("click", function() {
      title.style.color = "#FF5733";  // 改變標題顏色
      alert("你點擊了標題！");  // 顯示一個訊息框
    });
  });
  
