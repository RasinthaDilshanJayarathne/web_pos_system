function loadCustChomboBoxData(value) {
    $("#custChombo").append(value);
}

$("#custChombo").click(function () {
    let custId = $("#custChombo").val();

    let custName = $("#orderCustName").val();
    let telephoneNo = $("#orderTelephoneNo").val();
    let address = $("#orderAddress").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == custId) {
            custName = customerDB[i].name;
            telephoneNo = customerDB[i].phoneNo;
            address =  customerDB[i].address;

            $("#orderCustName").val(custName);
            $("#orderTelephoneNo").val(telephoneNo);
            $("#orderAddress").val(address);
        }
    }
});

function loadItemChomboBoxData(value) {
    $("#itemChombo").append(value);
}

$("#itemChombo").click(function () {
    console.log("Enter Order");
    let itemCode = $("#itemChombo").val();

    let itemName = $("#orderItemName").val();
    let itemPrice = $("#orderUnitPrice").val();
    let itemQty = $("#orderQtyOnHand").val();

    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].id == itemCode) {
            console.log("Enter if condition");
            itemName = itemDB[i].name;
            itemPrice = itemDB[i].price;
            itemQty =  itemDB[i].qtyOnHand;

            $("#orderItemName").val(itemName);
            $("#orderUnitPrice").val(itemPrice);
            $("#orderQtyOnHand").val(itemQty);
        }
    }
});

$("#addToCart").click(function (){
    loadItemData();

});

function loadItemData(){
    $("#orderTable").empty();

    let itemCode = $("#itemChombo").val();
    let itemName = $("#orderItemName").val();
    let itemPrice = $("#orderUnitPrice").val();
    let itemQty = $("#orderQtyOnHand").val();
    let itemOrderQty = $("#orderOrderQty").val();

    let total = itemOrderQty * itemPrice;

    let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemOrderQty}</td><td>${total}</td></tr>`

    $("#orderTable").append(row);
    /*for (var i of itemDB){
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.price}</td><td>${i.qtyOnHand}</td><td><td></td></tr>`;
        $("#orderTable").append(row);
    }*/
}


/*
function generateItemID() {
    if (itemDB.length !== 0) {
        let id = itemDB[(itemDB.length) - 1].id;
        const txt = id.split('0', 2);
        console.log(txt);
        let newID = parseInt(txt[1]) + 1;
        console.log(newID);

        if (newID <= 9) {
            $("#orderId").text("O00" + newID);
        } else if (newID <= 99) {
            $("#orderId").text("O0" + newID);
        } else if (newID <= 999) {
            $("#orderId").text("O" + newID);
        }

    } else {
        $("#orderId").text("O001");
    }
}
*/

