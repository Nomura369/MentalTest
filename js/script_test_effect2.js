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
        let sled = document.querySelector(".main-content-scene-sled");
        let star1 = document.querySelector(".main-content-scene-star1");
        let star2 = document.querySelector(".main-content-scene-star2");
        
        if(window.matchMedia("(max-width: 768px)").matches){
            if(window.scrollY >= 50 && whetherPlayed == false){
                setTimeout(function() {
                    star1.classList.add("animate__animated");
                    star1.classList.add("animate__flash");
                }, 1000);
                setTimeout(function() {
                    star2.classList.add("animate__animated");
                    star2.classList.add("animate__flash");
                    sled.classList.add("animate__animated");
                    sled.classList.add("animate__bounceIn");
                }, 2000);
                setTimeout(function() {
                    $(".main-content-scene-light").fadeTo(1000, 1);
                }, 2500);
                setTimeout(function() {
                    $(".main-content-scene-light").fadeTo(1000, 0);
                }, 3500);
                
                whetherPlayed = true;
            }
        }else {
            if(window.scrollY >= 200 && whetherPlayed == false){
                setTimeout(function() {
                    star1.classList.add("animate__animated");
                    star1.classList.add("animate__flash");
                }, 1000);
                setTimeout(function() {
                    star2.classList.add("animate__animated");
                    star2.classList.add("animate__flash");
                    sled.classList.add("animate__animated");
                    sled.classList.add("animate__bounceIn");
                    $(".main-content-scene-light").fadeTo(1000, 1);
                }, 2000);
                setTimeout(function() {
                    $(".main-content-scene-light").fadeTo(1000, 1);
                }, 2500);
                setTimeout(function() {
                    $(".main-content-scene-light").fadeTo(1000, 0);
                }, 3500);
                
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
    //跟計分的程式碼放一起
});