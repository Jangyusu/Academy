//ex1
window.addEventListener("DOMContentLoaded", function() {
    var ex1 = document.querySelector("#ex1"),
        txtInput = ex1.querySelectorAll(".txt-input"),
        addButton = ex1.querySelector(".add-button"),
        delButton = ex1.querySelector(".del-button"),
        totButton = ex1.querySelector(".tot-button"),
        menuList = ex1.querySelector(".menu-list"),
        go = ex1.querySelector("table tbody"),
        name = [],
        kor = [],
        eng = [],
        total = { name, kor, eng },
        i = 0,
        b = 0;

    addButton.addEventListener("click", function() {
        if (txtInput[0].value == "" || txtInput[1].value == "" || txtInput[2].value == "") {
        } else {
            name.push(txtInput[0].value);
            kor.push(parseInt(txtInput[1].value));
            eng.push(parseInt(txtInput[2].value));

            go.innerHTML += "<tr><td>" + total.name[i] + "</td><td>" + total.kor[i] + "</td><td>" + total.eng[i] + "</td></tr>";

            i++;
        }
    });

    delButton.addEventListener("click", function() {
        name.pop();
        kor.pop();
        eng.pop();

        go.removeChild(go.lastElementChild);

        i--;
    });

    totButton.addEventListener("click", function() {
        var a = 0;

        for (var i = 0; i < kor.length; i++) {
            a += kor[i];
        }

        console.log(a);

        menuList.innerHTML = "<li>국어점수의 총 합 = " + a + "점 입니다.</li>";
        // menuList.innerHTML += "<li>영어점수의 총 합 = " + b + "점 입니다.</li>";
    });
});
