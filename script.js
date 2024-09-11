// 取得按鈕和視窗元素
const openBtn = document.getElementById("open-window-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const cancelBtns = document.querySelectorAll(".window-footer button");
const popupWindow1 = document.getElementById("popup-window-1");
const popupWindow2 = document.getElementById("popup-window-2");

// 取得所有標籤按鈕和視窗內容區域
const tabButtons = document.querySelectorAll(".tab-button");

// 定義不同標籤對應的內容和圖片
const tabContent = {
  contents: {
    text: `
       旺旺仙貝 &nbsp;|&nbsp; 台灣人<br />
    <br />
        學生兼打工仔，做過珠寶設計公司的打雜員工、餐館會計助理、咖啡廳打工人等職業。<br />
        <br />會畫圖，但不多。<br />
        會寫作，但不多。<br />
        會敲程式，一點點，有敲壞鍵盤的經驗。<br />
        最喜歡的一句話：Peace&nbsp;and&nbsp;Love
      `,
    image: "contents-image.jpg",
  },
  contact: {
    text: `
        Gmail：structures0124@gmail.com<br />
        IG：<a href="https://www.instagram.com/chiwen_illust" target="_blank">@chiwen_illust</a><br />
        FB：<a
          href="https://www.facebook.com/profile.php?id=61550642511892"
          target="_blank"
        >被子那</a><br />
        常駐 FB，但私訊不常開，有急事可以傳具聳動標題的電子郵件。<br />
        或DC。
      `,
    image: "index-image.jpg",
  },
  others: {
    text: `
        推薦大家爬個山<br />
        枕頭山 &nbsp;|&nbsp; 6.6公里 &nbsp;|&nbsp; 2 小時 10 分鐘 <br/>
        五寮尖 &nbsp;|&nbsp; 4.47 公里 &nbsp;|&nbsp; 5 小時 <br/>
        
        神仙縱走 &nbsp;|&nbsp; 12.5 公里 &nbsp;|&nbsp; 8 小時<br/>
        嘉明湖 &nbsp;|&nbsp; 13 公里 &nbsp;|&nbsp; 三天兩夜<br/>
        玉山 &nbsp;|&nbsp; 10.9 公里 &nbsp;|&nbsp; 兩天一夜<br/>
      `,
    image: "find-image.jpg",
  },
};

// 取得視窗內容區域
const windowBody = document.querySelector(".window-body");

// 監聽所有標籤按鈕的點擊事件，並更新內容和圖片
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // 移除所有按鈕的 active 狀態
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // 設定當前點擊的按鈕為 active
    button.classList.add("active");

    // 根據按鈕的文字更新對應的內容和圖片
    const tabKey = button.textContent.toLowerCase();
    windowBody.querySelector("p").innerHTML = tabContent[tabKey].text;
    popupImage.src = tabContent[tabKey].image;
  });
});

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
