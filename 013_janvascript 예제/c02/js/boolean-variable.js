// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

var con = document.getElementById("content");

var tit = document.getElementById("tit");
tit.textContent = "ClassName";

// Get the element that has an id of stock
var elStock = document.getElementById("stock");
// Set class name with value of inStock variable
elStock.className = inStock;

// Get the element that has an id of shipping
var elShip = document.getElementById("shipping");
// Set class name with value of shipping variable
elShip.className = shipping;

elStock.addEventListener("click", function() {
    if (elStock.className === "true") {
        elStock.className = shipping;
    } else {
        elStock.className = inStock;
    }
    con.classList.add("active");
});

elShip.addEventListener("click", function() {
    if (elShip.className === "true") {
        elShip.className = shipping;
    } else {
        elShip.className = inStock;
    }
    con.classList.remove("active");
});
