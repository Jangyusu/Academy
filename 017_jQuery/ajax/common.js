$(function () {
    //start

    $.ajax({

        url: "data.xml",
        type: "GET", //POST
        dateType: "xml",
        // beforeSend: function () { 문서로드시 발생 },
        // completed: function() { 문서로드 완료 },
        success: function (data) { //문서로드 성공

            var imgTag;

            $(data).find('item').each(function () {
                console.log()
                imgTag = `<img src=${$(this).text()}>`;
                $("section").append(imgTag);
            });
        },
        error: function () { //문서로드 실패
            alert("FAIL");
        }

    });

    //end
});