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
    let recordsRef = db.collection("records");
    recordsRef.doc("1").set({
        "scores":[0, 0, 0, 0, 0],
        "clicks":[0, 0, 0, 0, 0]
    });
});
