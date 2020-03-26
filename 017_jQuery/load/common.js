$(function () {
    //start

    $("header").load("header.html");
    $("footer").load("footer.html .foot");
    $("section").load("main.html");

    $("body").addClass("active");

    setTimeout(function () {
        $("header nav a").on("click", function (e) {
            e.preventDefault();

            var link = $(this).attr("href");
            $("body").removeClass("active");

            setTimeout(function () {
                location.href = link;
            }, 500)
        });
    }, 10);


    //end
});