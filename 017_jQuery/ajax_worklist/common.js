$(function () {
    //start
    $.ajax({
        url: 'data.xml',
        type: 'GET',
        dataType: 'xml',
        success: function (data) {

            var thum, name, time;
            var workMain, workList = '';

            $(data).find('work').each(function (i) {
                thum = $(this).find('thum').text();
                name = $(this).find('name').text();
                time = $(this).find('time').text();

                if (!$("section").hasClass('.work')) {
                    funMain();
                } else {
                    funSub();
                }
            });





            function funMain() {
                workMain = "<figure><img src=" + thum + ">                <figcaption>" + name + "</figcaption>            </figure>";

                $('section').append(workMain);
            }

            function funSub() {
                workList = "<li>";
                workList += "<figure>";
                workList += "<img src=" + thum + ">";
                workList += "<figcaption>";
                workList += "<span>" + name + "</span>";
                workList += "<span>" + time + "</span>";
                workList += "</figcaption>";
                workList += "</figure>";
                workList += "</li>";

                $('section ul').append(workList);
            }

            $("section ul li").on("click", function () {
                console.log("a");
            })














            //            
            //            main(썸네일,제목),
            //            sub(썸네일,제목)
            //            detail(큰이미지,제목,기간,)
            //            



        }
    });

    //end
});







 // data.portfolio.length; 2
// data.portfolio[0].work1.length; 5
//            
//            for(var i in data.portfolio){
//                
//                for(var j in data.portfolio[i].work1){
//                    
//                }
//                
//            }
//            