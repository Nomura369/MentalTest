//最終分數結算

//先把所有選項的分數取出來(記得字串要換成整數)
let score1 = parseInt(localStorage.getItem("0")); //第一個選項被選擇的題數
let score2 = parseInt(localStorage.getItem("1")); //第二個選項被選擇的題數
let score3 = parseInt(localStorage.getItem("2")); //第三個選項被選擇的題數
let score4 = parseInt(localStorage.getItem("3")); //第四個選項被選擇的題數
let score5 = parseInt(localStorage.getItem("4")); //第五個選項被選擇的題數

let finalScores = [score1, score2, score3, score4, score5];

//判斷大小 => 前往分數最大的結果頁
let max = Math.max(...finalScores);
let maxIndex = finalScores.indexOf(max);
//其實可能會有每個選項被選次數一樣之類的問題...之後再說吧

let resultIndex = maxIndex + 1; //第幾題為最終結果
switch(resultIndex){
    case 1:
        location.href = "result1.html";
        break;
    case 2:
        location.href = "result2.html";
        break;
    case 3:
        location.href = "result3.html";
        break;
    case 4:
        location.href = "result4.html";
        break;
    case 5:
        location.href = "result5.html";
        break;
    default:
        break;
}


//回到結果頁後資料會重置，而且關閉瀏覽器便會刪除，應該不必特別做刪除資料的動作