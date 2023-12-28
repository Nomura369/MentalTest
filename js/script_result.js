$(document).ready(function() {
    /*依序淡入頁面*/
    $(".main-title").fadeTo(1000, 1);
    $(".main-subtitle").fadeTo(1000, 1);
    setTimeout(function() {
        $(".main-card").fadeTo(1000, 1);
        $(".main-bless").fadeTo(1000, 1);
        $(".main-buttons").fadeTo(1000, 1);
        $(".main-homebutton").fadeTo(1000, 1);
    }, 2000);

    /*角色圖鑑的hover與頁面傳送*/
    let bookImage = document.querySelector("#book-image");
    let bookWord = document.querySelector("#book-word");

    bookImage.addEventListener("mouseenter", function(){
        bookImage.setAttribute("src", "../images/book_hover.png");
        bookWord.style.color = "#332B26";
    });
    bookImage.addEventListener("mouseout", function(){
        bookImage.setAttribute("src", "../images/book_normal.png");
        bookWord.style.color = "#E1E1E1";
    });
    bookImage.addEventListener("click", function(){
        window.location.href = "character.html"; 
    });

    /*下載按鈕的hover、點擊、下載功能及下載完成標示*/
    let downloadImage = document.querySelector("#download-image");
    let downloadWord = document.querySelector("#download-word");
    downloadImage.addEventListener("mouseenter", function(){
        downloadImage.setAttribute("src", "../images/download_hover.png");
        downloadWord.style.color = "#332B26";
    });
    downloadImage.addEventListener("mouseout", function(){
        downloadImage.setAttribute("src", "../images/download_normal.png");
        downloadWord.style.color = "#E1E1E1";
    });
    downloadImage.addEventListener("click", function(){
        downloadImage.setAttribute("src", "../images/download_active.png");
    });

    /*sns icon的hover效果*/
    let fb = document.querySelector("#fb");
    let ig = document.querySelector("#ig");
    let x = document.querySelector("#x");
    fb.addEventListener("mouseenter", function(){
        fb.setAttribute("src", "../images/facebook_hover.png");
    });
    fb.addEventListener("mouseout", function(){
        fb.setAttribute("src", "../images/facebook_normal.png");
    });
    ig.addEventListener("mouseenter", function(){
        ig.setAttribute("src", "../images/instagram_hover.png");
    });
    ig.addEventListener("mouseout", function(){
        ig.setAttribute("src", "../images/instagram_normal.png");
    });
    x.addEventListener("mouseenter", function(){
        x.setAttribute("src", "../images/twitter_hover.png");
    });
    x.addEventListener("mouseout", function(){
        x.setAttribute("src", "../images/twitter_normal.png");
    });

});