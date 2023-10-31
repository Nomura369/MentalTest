$(document).ready(function() {
    window.onload = function(){
        $(".main").fadeIn(2000);
        document.querySelector(".main").style.display = "flex";
        document.querySelector(".main").style.flexDirection = "column-reverse";
        document.querySelector(".main").style.alignItems = "center";
        document.querySelector(".main").style.justifyContent = "center";
        document.querySelector(".main").style.flexGrow = "1";
    }
});