$(function () {
    //start

    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            console.log(data);

        }
    });

    //end
});