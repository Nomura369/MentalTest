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
        let light = document.querySelector(".main-content-scene-light");
        let vase = document.querySelector(".main-content-scene-vase");
        let food1 = document.querySelector(".main-content-scene-food1");
        let food2 = document.querySelector(".main-content-scene-food2");
        let food3 = document.querySelector(".main-content-scene-food3");
        let food4 = document.querySelector(".main-content-scene-food4");
        
        if(window.matchMedia("(max-width: 768px)").matches){
            if(window.scrollY >= 100 && whetherPlayed == false){
                setTimeout(function() {
                    light.classList.add("animate__animated");
                    light.classList.add("animate__flash");
                }, 1000);
                setTimeout(function() {
                    vase.classList.add("animate__animated");
                    vase.classList.add("animate__fadeIn");
                }, 2000);
                setTimeout(function() {
                    food1.classList.add("animate__animated");
                    food1.classList.add("animate__fadeIn");
                }, 2500);
                setTimeout(function() {
                    food2.classList.add("animate__animated");
                    food2.classList.add("animate__fadeIn");
                }, 3000);
                setTimeout(function() {
                    food3.classList.add("animate__animated");
                    food3.classList.add("animate__fadeIn");
                }, 3500);
                setTimeout(function() {
                    food4.classList.add("animate__animated");
                    food4.classList.add("animate__fadeIn");
                }, 4000);
                
                whetherPlayed = true;
            }
        }else {
            if(window.scrollY >= 250 && whetherPlayed == false){
                setTimeout(function() {
                    light.classList.add("animate__animated");
                    light.classList.add("animate__flash");
                }, 1000);
                setTimeout(function() {
                    vase.classList.add("animate__animated");
                    vase.classList.add("animate__fadeIn");
                }, 2000);
                setTimeout(function() {
                    food1.classList.add("animate__animated");
                    food1.classList.add("animate__fadeIn");
                }, 2500);
                setTimeout(function() {
                    food2.classList.add("animate__animated");
                    food2.classList.add("animate__fadeIn");
                }, 3000);
                setTimeout(function() {
                    food3.classList.add("animate__animated");
                    food3.classList.add("animate__fadeIn");
                }, 3500);
                setTimeout(function() {
                    food4.classList.add("animate__animated");
                    food4.classList.add("animate__fadeIn");
                }, 4000);
                
                whetherPlayed = true;
            }
        }

    }

    sceneAnimation();
    window.addEventListener('scroll', function() {
        sceneAnimation();
    });

    //淡出
    //跟計分的程式碼放一起
});