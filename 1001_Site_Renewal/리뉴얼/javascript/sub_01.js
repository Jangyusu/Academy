var firstContent = document.getElementById("con_01");
var secondContent = document.getElementById("con_02");
var thirdContent = document.getElementById("con_03");

var titleBackground = document.getElementById("title");

function backgroundChange() {
    firstContent.addEventListener("click", function(e) {
        e.preventDefault();
        titleBackground.style.background = "url(../img/sub/img_sub01.jpg) no-repeat center";
        title.innerHTML = "정보공개제도 안내";
        firstContent.style.opacity = "1";
    });

    secondContent.addEventListener("click", function(e) {
        e.preventDefault();
        titleBackground.style.background = "url(../img/sub/img_sub02.jpg) no-repeat center";
        title.innerHTML = "공공데이터 개방";
        secondContent.style.opacity = "1";
    });

    thirdContent.addEventListener("click", function(e) {
        e.preventDefault();
        titleBackground.style.background = "url(../img/sub/img_sub03.jpg) no-repeat center";
        title.innerHTML = "부채 내용";
        thirdContent.style.opacity = "1";
    });
}

backgroundChange(); // 제목과 배경 변경
