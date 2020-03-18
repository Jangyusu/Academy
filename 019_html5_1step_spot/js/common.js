$(function () {
    //document ready



    $("nav li").on("mouseenter", slide)
    $("nav li").on("mouseleave", slide)
    $(".trigger_menu").on("click", trggerMenu)

    function slide() {
        var $thisMenu = $(this).find("div");

        if ($thisMenu.css("display") == "none") {
            $thisMenu.slideDown();
        } else {
            $thisMenu.slideUp();
        }
    }

    function trggerMenu() {
        $("header p > span").stop().slideToggle();
        $(".trigger_menu").toggleClass("active");
    }

    //end
})