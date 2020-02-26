// Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors = new Array("white", "black", "custom");
var colors2 = new Array("aa", "bb");
var el = document.getElementById("colors");
// Show the first item from the array.

colors[2] = "beige";
colors.push("beige2");
//배열의 끝에 원하는 값을 추가

colors.shift();
// 첫번째 값을 제거

colors.pop();
// 마지막 값을 제거

colors = colors.concat(colors2);
// 두개의 배열을 합쳐줌

var font = ["dotum", "gulim"];
colors = colors.concat(font);
// 두개의 배열을 합쳐줌

// colors = colors.join("/");
// 배열값 사이에 원하는 문자를 삽입

colors = colors.reverse();
// 배열을 역순으로 재배치

colors = colors.slice(0, 2);

console.log(colors);

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issues on p228-231
el.innerHTML = colors[0];

There was a typo in the first print run in the last line of this example, it has been corrected in this file.
*/
