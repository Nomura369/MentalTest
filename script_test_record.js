//題目頁的共同程式碼(分數相關)

//宣告區
function addClicks(){
    clicks = parseInt(newScore) + 1;    
}

function WhichToStore(index){
    let newScore = localStorage.getItem(index); //取得該選項目前被點選的次數
    newScore = parseInt(newScore) + 1; //將次數由字串轉成數字，再進行加減
    localStorage.setItem(index, newScore.toString()); //把結果傳回去
}

function whetherClick(){
    if(clicks == 1){ 
        //限定一頁只存入一筆資料
        //返回後資料並不會消除，所以回去點了第二次後，需要將上一筆刪除，再添增新的上去
        //這頁被點擊過 => 刪除原先輸入的資料(等等怎麼刪www)
        alert("不好意思，目前還沒辦法重新選擇選項，請返回上一頁繼續作答"); /*沒有回傳值*/
        /*setTimeout(function() {
            window.history.forward();
        }, 5000);*/
    } else{ //這頁沒被點擊過 => 算分數程序
        document.querySelector("#id1").addEventListener("click", function(){ WhichToStore("0"); });
        document.querySelector("#id2").addEventListener("click", function(){ WhichToStore("1"); });
        document.querySelector("#id3").addEventListener("click", function(){ WhichToStore("2"); });
        document.querySelector("#id4").addEventListener("click", function(){ WhichToStore("3"); });
        document.querySelector("#id5").addEventListener("click", function(){ WhichToStore("4"); });
    }
}


//主程式區
whetherClick();
document.querySelector(".main-content-option-link").addEventListener("click", addClicks);




