document.getElementById("customer").style.display = "none";
document.getElementById("item").style.display = "none";
document.getElementById("placeOrder").style.display = "block";

document.getElementById("navHome").addEventListener("click", function () {
    document.getElementById("placeOrder").style.display = "block";
    document.getElementById("customer").style.display = "none";
    document.getElementById("item").style.display = "none";

    generateOrderID();
});

document.getElementById("navItem").addEventListener("click", function () {
    document.getElementById("placeOrder").style.display = "none";
    document.getElementById("customer").style.display = "none";
    document.getElementById("item").style.display = "block";
});

document.getElementById("navCustomer").addEventListener("click", function () {
    document.getElementById("placeOrder").style.display = "none";
    document.getElementById("customer").style.display = "block";
    document.getElementById("item").style.display = "none";
});