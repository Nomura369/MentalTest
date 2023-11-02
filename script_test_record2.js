//得先執行的部分
let clickTime = localStorage.getItem("1page"); //取得該頁面按鈕被點擊的次數，此時裡面存的是字串
clickTime = parseInt(clickTime); //轉換為數字，方便之後的計算

//判斷該頁面的選項是否被點擊過
    //不用擔心事件監聽器的問題，因為這裡主要是判斷上次頁面留下的click次數
    //一頁限定只存入一筆資料
    //這頁被點擊過 => 刪除原先輸入的資料(等等怎麼刪www)

if(clickTime == 1){ 
    alert("不好意思，目前還沒辦法重新選擇選項，系統將自動帶您回到剛才的頁面"); /*沒有回傳值*/
    window.history.forward();
    //因為會自行跳轉，所以不用再添加其他設定
}


//函式宣告區
function addScore(index){  
    let score = localStorage.getItem(index); //取得該選項目前被點選的次數，此時裡面存的是字串
    score = parseInt(score); //轉換為數字，方便之後的計算  
    score++;
    localStorage.setItem(index, score.toString()); //把結果傳回去
}

function addClickTime(){
    clickTime++; 
    localStorage.setItem("1page", clickTime.toString()); //把結果傳回去(剛才很蠢地忘記這麼做) 
}


//主程式區
document.querySelector("#id1").addEventListener("click", function(){ addScore("0"); addClickTime(); });
document.querySelector("#id2").addEventListener("click", function(){ addScore("1"); addClickTime(); });
document.querySelector("#id3").addEventListener("click", function(){ addScore("2"); addClickTime(); });
document.querySelector("#id4").addEventListener("click", function(){ addScore("3"); addClickTime(); });
document.querySelector("#id5").addEventListener("click", function(){ addScore("4"); addClickTime(); });






