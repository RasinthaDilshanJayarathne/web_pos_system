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
            address = customerDB[i].address;

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
    let itemCode = $("#itemChombo").val();

    let itemName = $("#orderItemName").val();
    let itemPrice = $("#orderUnitPrice").val();
    let itemQty = $("#orderQtyOnHand").val();

    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].id == itemCode) {
            itemName = itemDB[i].name;
            itemPrice = itemDB[i].price;
            itemQty = itemDB[i].qtyOnHand;

            $("#orderItemName").val(itemName);
            $("#orderUnitPrice").val(itemPrice);
            $("#orderQtyOnHand").val(itemQty);
        }
    }
});

$("#addToCart").click(function () {
    loadItemData();
    clearItemData();
});

let itemCode;
let itemName;
let itemPrice;
let itemQty;
let itemOrderQty;
let cash;
let total;

function loadItemData() {

    itemCode = $("#itemChombo").val();
    itemName = $("#orderItemName").val();
    itemPrice = $("#orderUnitPrice").val();
    itemQty = $("#orderQtyOnHand").val();
    itemOrderQty = $("#orderOrderQty").val();
    cash = $("#cash").val();

    total = itemOrderQty * itemPrice;

    $("#totalPrice").val(itemOrderQty * itemPrice);

    $("#orderTable").empty();
    let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemOrderQty}</td><td>${total}</td>
                <td><button id="btnItemCartDelete" type="button" class="btn-sm btn-danger">Delete</button></tr></tr>`;
    $("#orderTable").append(row);
};

$("#orderTable").on('click', '#btnItemCartDelete', function () {
    $(this).closest('tr').remove();
});

function clearItemData() {
    $('#itemChombo,#orderItemName,#orderUnitPrice,#orderQtyOnHand,#orderOrderQty').val("");
}

$("#discountCmb").click(function () {
    let discountPresentage = $("#discountCmb").val();
    let finalBalance = $("#balance").val();

    let A = total - ((total * discountPresentage) / 100);
    finalBalance = cash - A;

    $("#balance").val(finalBalance);
    console.log(finalBalance);
});


/*function generateItemID() {
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
}*/

