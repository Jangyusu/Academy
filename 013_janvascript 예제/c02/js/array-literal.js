// Create an array and assign it values.
var colors = ["red", "green", "blue"];

// Show the first item from the array.
var el = document.getElementById("colors");
el.textContent = colors[0];

var clr = "";
for (var i in colors) {
    // clr += "<br><span style=color:";
    // clr += colors[i] + ">" + colors[i];
    // clr += "</span>";

    clr += "<br><span>" + colors[i] + "</span>";
}

el.innerHTML = clr;
var span = el.getElementsByTagName("span");

for (var i in colors) {
    span[i].style.color = colors[i];
}
/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 7, but note the security issues on p228-231
el.textContent = colors[0];
*/
