$(document).ready(function() {
    //Firebase初始化
    firebase.initializeApp({
        apiKey: "AIzaSyCH5c_zQVDfln4wmzVb6Pr56y8UgD3NsHM",
        authDomain: "mentaltest-1ceda.firebaseapp.com",
        projectId: "mentaltest-1ceda",
        storageBucket: "mentaltest-1ceda.appspot.com",
        messagingSenderId: "684988781392",
        appId: "1:684988781392:web:127966dd6653a89c165255"
      });

    let db = firebase.firestore(); //宣告資料庫物件
    let scoresRef = db.collection("scores").doc("default");
    let clicksRef = db.collection("clicks").doc("default");

    //先檢查該網頁的選項是否被點擊過
    clicksRef.get().then(function(doc){ //doc為取得的資料
        if(doc.data().q2 == true){
          scoresRef.update({
              "a2": 0
          });
          clicksRef.update({
              "q2": false
          });
        }
      });

    //主程式：監聽按鈕並計算分數與網頁點擊次數、播放離開特效、轉至其他頁面
    function addScoreAndClick(index){
        //分數計算（從資料庫裡拿紀錄再將更新過的傳回去）
        let ans = 0;
        scoresRef.get().then(function(doc){
            ans = doc.data().a2; //紀錄第二題使用者選的選項
        });
        switch(index){
            case "0":
                ans += 2;
                break;
            case "1":
                ans += 4;
                break;
            case "2":
                ans += 6;
                break;
            case "3":
                ans += 8;
                break;
            case "4":
                ans += 10;
                break;
        }
        scoresRef.update({
            "a2": ans
        });
        //網頁點擊次數計算
        clicksRef.update({
            "q2": true
        });
    }

    function leaveHere(){
        //播放離開特效：亮光淡入、再跟情境圖的其他地方一起依序淡出
        setTimeout(function() {
            $(".main-content-scene-light").fadeTo(700, 1);
        }, 500);
        setTimeout(function() {
            $(".main-content-word").fadeTo(1000, 0);
        }, 1500);
        setTimeout(function() {
            $(".main-content-scene").fadeTo(1000, 0);
        }, 2000);
        setTimeout(function() {
            $(".main-progress").fadeTo(500, 0);
        }, 3000);
        //前往下一頁
        setTimeout(function() {
            window.location.href = "test3.html";
        }, 3500);
    }

    document.querySelector("#id1").addEventListener("click", function(){ addScoreAndClick("0"); leaveHere(); });
    document.querySelector("#id2").addEventListener("click", function(){ addScoreAndClick("1"); leaveHere(); });
    document.querySelector("#id3").addEventListener("click", function(){ addScoreAndClick("2"); leaveHere(); });
    document.querySelector("#id4").addEventListener("click", function(){ addScoreAndClick("3"); leaveHere(); });
    document.querySelector("#id5").addEventListener("click", function(){ addScoreAndClick("4"); leaveHere(); });
    
});





