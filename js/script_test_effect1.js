$(document).ready(function() {
    //依序淡入
    $(".main-progress").fadeTo(1000, 1);
    setTimeout(function() {
        $(".main-content-scene").fadeTo(1000, 1);
    }, 500);
    setTimeout(function() {
        $(".main-content-word").fadeTo(1000, 1);
    }, 1000);
    
    //情境圖動畫
    let whetherPlayed = false;
    function sceneAnimation(){
        // 獲取當前滾動位置，若下滑超過特定位置則播放動畫（僅限一次）
        if(window.matchMedia("(max-width: 768px)").matches){
            if(window.scrollY >= 100 && whetherPlayed == false){
                let card = document.querySelector(".main-content-scene-card");
                setTimeout(function() {
                    card.setAttribute("src", "images/scene1_card2.png");
                }, 500);
                setTimeout(function() {
                    card.setAttribute("src", "images/scene1_card3.png");
                }, 1000);
                setTimeout(function() {
                    card.setAttribute("src", "images/scene1_card4.png");
                }, 1500);
                
                whetherPlayed = true;
            }
        }else {
            if(window.scrollY >= 250 && whetherPlayed == false){
                let card = document.querySelector(".main-content-scene-card");
                setTimeout(function() {
                    card.setAttribute("src", "images/scene1_card2.png");
                }, 500);
                setTimeout(function() {
                    card.setAttribute("src", "images/scene1_card3.png");
                }, 1000);
                setTimeout(function() {
                    card.setAttribute("src", "images/scene1_card4.png");
                }, 1500);
                
                whetherPlayed = true;
            }
        }
    }

    sceneAnimation();
    window.addEventListener('scroll', function() {
        sceneAnimation();
    });

    //.header-home-icon的hover效果
    //因為用css容易lag所以就搬來這裡了
    let home = document.querySelector(".header-home-icon");
    home.addEventListener("mouseenter", function(){
        home.setAttribute("src", "images/home_icon_hover.png");
    });
    home.addEventListener("mouseout", function(){
        home.setAttribute("src", "images/home_icon_normal.png");
    });

    //淡出
    //預計跟計分的程式碼放一起
});