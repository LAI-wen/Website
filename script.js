// 取得按鈕和視窗元素
const openBtn = document.getElementById("open-window-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const cancelBtns = document.querySelectorAll(".window-footer button");
const popupWindow1 = document.getElementById("popup-window-1");
const popupWindow2 = document.getElementById("popup-window-2");

// 取得所有標籤按鈕和視窗內容區域
const tabButtons = document.querySelectorAll(".tab-button");
const windowBody = document.querySelector(".window-body p");

// 定義不同標籤對應的內容
const tabContent = {
  contents:
    "Click a book, and then click Open. Or click another tab, such as Index.",
  index: "Here is the index. You can search for specific topics.",
  find: "Use the find feature to locate specific information quickly.",
};

// 預設內容
windowBody.textContent = tabContent.contents;

// 點擊按鈕顯示兩個視窗
openBtn.addEventListener("click", function () {
  popupWindow1.style.display = "block";
  popupWindow2.style.display = "block";
});

// 點擊 X 按鈕後關閉對應的視窗
closeBtns.forEach((button) => {
  button.addEventListener("click", function () {
    const windowId = this.getAttribute("data-window");
    document.getElementById(windowId).style.display = "none";
  });
});
// 點擊 Cancel 按鈕後關閉對應的視窗
cancelBtns.forEach((button) => {
  button.addEventListener("click", function () {
    const windowId = this.closest(".window").id;
    document.getElementById(windowId).style.display = "none";
  });
});
// 監聽所有標籤按鈕的點擊事件，並更新內容
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // 移除所有按鈕的 active 狀態
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // 設定當前點擊的按鈕為 active
    button.classList.add("active");

    // 根據按鈕的文字更新對應的內容
    if (button.textContent === "Contents") {
      windowBody.textContent = tabContent.contents;
    } else if (button.textContent === "Index") {
      windowBody.textContent = tabContent.index;
    } else if (button.textContent === "Find") {
      windowBody.textContent = tabContent.find;
    }
  });
});
