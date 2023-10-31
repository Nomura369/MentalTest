$(document).ready(function() {
    window.onload = function(){
        $(".main-scene").fadeTo(1000, 1);
        setTimeout(function() {
            $(".main-content").fadeTo(1000, 1);
        }, 500);
    }
});