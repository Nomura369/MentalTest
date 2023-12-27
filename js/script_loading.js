/*最終分數結算*/
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

//取得每一題的答題結果並加總
let total = 0;
scoresRef.get().then(function(doc){
  total = doc.data().a1 + doc.data().a2 + doc.data().a3 + doc.data().a4 + doc.data().a5;
});

//記得設定動畫時長（大概會限定在某個時間範圍）
let lastingTime = 0;
while(lastingTime < 5 || lastingTime > 7){
  lastingTime = Math.round(Math.random()*10); //注意random的範圍是0-1之間的小數 => 0-10 => 5-7
}

//先設時間再播動畫，計時完後根據分數前往對應的結果頁
setTimeout(function() {
  if(total <= 16){
    window.location.href = "result1.html";
  } else if(total <= 24){
    window.location.href = "result2.html";
  } else if(total <= 32){
    window.location.href = "result3.html";
  } else if(total <= 40){
    window.location.href = "result4.html";
  } else {
    window.location.href = "result5.html";
  }
}, lastingTime*1000); //注意單位為毫秒


//從結果頁回到首頁後資料會重置，不必特別做刪除資料的動作

/*loading字樣動畫*/
// Wrap every letter in a span
let textWrapper = document.querySelector('.loading-word');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.loading-word .letter',
  translateY: [-100,0],
  easing: "easeOutExpo",
  duration: 1500,
  delay: (el, i) => 30 * i
})
.add({
  targets: '.loading-word',
  opacity: 0,
  duration: 1200,
  easing: "easeOutExpo",
  delay: 1000
});


