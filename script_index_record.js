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
    let scoresRef = db.collection("scores");
    let clicksRef = db.collection("clicks");
    scoresRef.doc("default").set({
        "a1": 0,
        "a2": 0,
        "a3": 0,
        "a4": 0,
        "a5": 0
    });
    clicksRef.doc("default").set({
        "q1": false,
        "q2": false,
        "q3": false,
        "q4": false,
        "q5": false
    });
});
