//宣告區
let scores = [0, 0, 0, 0, 0]; //紀錄每個選項被點擊的次數
let clickTimes = [0, 0, 0, 0, 0]; //紀錄每一頁有點擊選項的次數


function recordScores(value, index){
    let valueString = value.toString();
    let indexString = index.toString();
    localStorage.setItem(indexString, valueString);
}

function recordClickTimes(value, index){
    let valueString = value.toString();
    let indexString = index.toString() + "page";
    localStorage.setItem(indexString, valueString);
}


//主程式區
scores.forEach(recordScores);
clickTimes.forEach(recordClickTimes);

//這部分應該沒問題了