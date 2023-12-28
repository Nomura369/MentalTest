$(document).ready(function() {
    /*依序淡入頁面*/
    $(".main-title").fadeTo(1000, 1);
    $(".main-subtitle").fadeTo(1000, 1);
    setTimeout(function() {
        $(".main-chara-infor-image").fadeTo(1000, 1);
    }, 700);

    //.header-home-icon的hover效果
    //因為用css容易lag所以就搬來這裡了
    let home = document.querySelector(".header-home-icon");
    home.addEventListener("mouseenter", function(){
        home.setAttribute("src", "images/home_icon_hover_.png");
    });
    home.addEventListener("mouseout", function(){
        home.setAttribute("src", "images/home_icon_normal.png");
    });

    //.header-back-icon的hover效果
    let back = document.querySelector(".header-back-icon");
    back.addEventListener("mouseenter", function(){
        back.setAttribute("src", "images/back_icon_hover.png");
    });
    back.addEventListener("mouseout", function(){
        back.setAttribute("src", "images/back_icon_normal.png");
    });

    //角色圖的hover效果
    let chara1 = document.querySelector(".chara1");
    let infor1 = document.querySelector(".infor1");
    chara1.addEventListener("mouseenter", function(){
        chara1.style.border = "2px solid #AF934D";
        infor1.style.opacity = "1";
    });
    chara1.addEventListener("mouseout", function(){
        chara1.style.border = "3px solid #BBACAC";
        infor1.style.opacity = "0";
    });

    let chara2 = document.querySelector(".chara2");
    let infor2 = document.querySelector(".infor2");
    chara2.addEventListener("mouseenter", function(){
        chara2.style.border = "2px solid #AF934D";
        infor2.style.opacity = "1";
    });
    chara2.addEventListener("mouseout", function(){
        chara2.style.border = "3px solid #BBACAC";
        infor2.style.opacity = "0";
    });

    let chara3 = document.querySelector(".chara3");
    let infor3 = document.querySelector(".infor3");
    chara3.addEventListener("mouseenter", function(){
        chara3.style.border = "2px solid #AF934D";
        infor3.style.opacity = "1";
    });
    chara3.addEventListener("mouseout", function(){
        chara3.style.border = "3px solid #BBACAC";
        infor3.style.opacity = "0";
    });

    let chara4 = document.querySelector(".chara4");
    let infor4 = document.querySelector(".infor4");
    chara4.addEventListener("mouseenter", function(){
        chara4.style.border = "2px solid #AF934D";
        infor4.style.opacity = "1";
    });
    chara4.addEventListener("mouseout", function(){
        chara4.style.border = "3px solid #BBACAC";
        infor4.style.opacity = "0";
    });
    
    let chara5 = document.querySelector(".chara5");
    let infor5 = document.querySelector(".infor5");
    chara5.addEventListener("mouseenter", function(){
        chara5.style.border = "2px solid #AF934D";
        infor5.style.opacity = "1";
    });
    chara5.addEventListener("mouseout", function(){
        chara5.style.border = "3px solid #BBACAC";
        infor5.style.opacity = "0";
    });

    /*sns icon的hover效果*/
    let fb = document.querySelector("#fb");
    let ig = document.querySelector("#ig");
    let x = document.querySelector("#x");
    fb.addEventListener("mouseenter", function(){
        fb.setAttribute("src", "images/facebook_hover.png");
    });
    fb.addEventListener("mouseout", function(){
        fb.setAttribute("src", "images/facebook_normal.png");
    });
    ig.addEventListener("mouseenter", function(){
        ig.setAttribute("src", "images/instagram_hover.png");
    });
    ig.addEventListener("mouseout", function(){
        ig.setAttribute("src", "images/instagram_normal.png");
    });
    x.addEventListener("mouseenter", function(){
        x.setAttribute("src", "images/twitter_hover.png");
    });
    x.addEventListener("mouseout", function(){
        x.setAttribute("src", "images/twitter_normal.png");
    });
});

