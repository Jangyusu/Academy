var row = document.querySelector("tbody"),
    check = document.querySelectorAll(".check input"),
    i = document.querySelectorAll("tbody tr").length + 1;

function enter() {
    if (check[0].value != "") {
        if (i < 10) {
            row.innerHTML += "<tr><td> 0" + i + "</td>" + "<td>" + check[0].value + "</td>";
        } else {
            row.innerHTML += "<tr><td>" + i + "</td>" + "<td>" + check[0].value + "</td>";
        }

        i++;
        check[0].value = "";
    } else {
        alert("이름을 입력하세요.");
    }
}

check[1].addEventListener("click", enter);

check[0].addEventListener("keydown", function() {
    if (event.keyCode == 13) {
        enter();
    }
});
