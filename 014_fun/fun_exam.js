//ex02-다중 함수 결과물 얻기
var calc = document.querySelectorAll(".clac input"),
    number = document.querySelectorAll(".number input"),
    result = document.querySelectorAll(".result input");

for (var i in number) {
    number[i].onclick = function() {
        if (result[0].value == 0) {
            result[0].value = "";
        }
        result[0].value += this.value;
    };
}

for (var i in calc) {
    calc[i].onclick = function() {
        result[0].value += this.value;
    };
}

result[1].onclick = function() {
    var total = eval(result[0].value);
    result[0].value = total;
};

result[2].onclick = function() {
    result[0].value = "0";
};

// 계산기
