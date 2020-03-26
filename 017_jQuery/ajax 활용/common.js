$(function () {
    //start

    $.ajax({

        url: "data.xml",

        type: "GET", //POST

        dateType: "xml",

        beforeSend: function () {
            $(".loading").fadeIn();
        },

        complete: function () {
            $(".loading").fadeOut();
        },

        success: function (data) { //문서로드 성공

            var imgTag = "",
                a = 3;

            $("button").on("click", function () {
                a += 3;
            })

            $(data).find('item').each(function (i) {
                if (i < a) {
                    imgTag = `<img src=${$(this).text()}>`;
                    $("section").append(imgTag); //각각 이미지 넣기
                };
            });

            // $("section").html(imgTag); //한번에 이미지 넣기
            $("section").fadeIn();


        },

        error: function () { //문서로드 실패
            alert("FAIL");
        }
    });

    //end
});