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
        let gift = document.querySelector(".main-content-scene-gift");
        
        if(window.matchMedia("(max-width: 768px)").matches){
            if(window.scrollY >= 100 && whetherPlayed == false){
                setTimeout(function() {
                    gift.classList.add("animate__animated");
                    gift.classList.add("animate__bounceIn");
                }, 1000);
                
                whetherPlayed = true;
            }
        }else {
            if(window.scrollY >= 250 && whetherPlayed == false){
                setTimeout(function() {
                    gift.classList.add("animate__animated");
                    gift.classList.add("animate__bounceIn");
                }, 1000);
                
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