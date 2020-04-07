window.addEventListener('DOMContentLoaded', function () {

    var all = document.querySelector('nav');
    var img = document.querySelector('section img');



    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json");
    xhr.send(null);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);

        //pushState("object", "title", "hash")
        //popstate





        all.addEventListener("click", function (e) {
            var target = e.target;
            var idx = target.dataset.id;
            view(idx);

            history.pushState({ page: idx }, "title", `page=${idx}`);
        });

        window.addEventListener("popstate", function () {
            view(history.state.page);
        })





        function view(i) {
            img.src = data.event[i];
        }

        //localhost.href="history.html"

        //history.back(); 뒤로
        //history.forward(); 앞으로

        //history.go(-1); 앞으로
    }


});