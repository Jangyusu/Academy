$(function () {
    //start
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            // for (var i = 0; i < data.event.length; i++) {
            //     console.log(data.event[i]);
            // }

            for (var i in data.event) {
                var imgNode = `<img src="${data.event[i]}">`;

                $("section").append(imgNode);

            }

        }
    });

    //end
});