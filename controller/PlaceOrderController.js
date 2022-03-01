$("#addToCart").click(function () {
    loadItemData();
    clearItemData();
    loadItemCartTable();
    genarateOrderId();
});

function genarateOrderId() {
    try {
        let lastOrderId = orderTable[orderDB.length-1].getOrderId();
        let newOrderId = parseInt(lastOrderId.substring(1,4))+1;
        if (newOrderId < 10) {
            $("#orderId").text("#D00"+newOrderId);
        }else if (newOrderId < 100) {
            $("#orderId").text("#D0"+newOrderId);
        } else {
            $("#orderId").text("#D"+newOrderId);
        }
    } catch (e) {
        $("#orderId").text("#D001");
    }
}


function loadCustChomboBoxData(value) {
    $("#custChombo").append(value);
}

$("#custChombo").click(function () {
    let custId = $("#custChombo").val();
    let custName = $("#orderCustName").val();
    let telephoneNo = $("#orderTelephoneNo").val();
    let address = $("#orderAddress").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() == custId) {
            custName = customerDB[i].getCustomerName();
            telephoneNo = customerDB[i].getCustomerPhone();
            address = customerDB[i].getCustomerAddress();

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
        if (itemDB[i].getItemCode() == itemCode) {
            itemName = itemDB[i].getItemName();
            itemPrice = itemDB[i].getItemPrice();
            itemQty = itemDB[i].getItemQtyOnHand();

            $("#orderItemName").val(itemName);
            $("#orderUnitPrice").val(itemPrice);
            $("#orderQtyOnHand").val(itemQty);
        }
    }
});

let itemCode;let itemName;let itemPrice;let itemQty;let itemOrderQty;let cash;let total;

$("#orderTable").empty();
function loadItemData() {
    itemCode = $("#itemChombo").val();
    itemName = $("#orderItemName").val();
    itemPrice = $("#orderUnitPrice").val();
    itemQty = $("#orderQtyOnHand").val();
    itemOrderQty = $("#orderOrderQty").val();
    cash = $("#cash").val();

    total = itemOrderQty * itemPrice;

    $("#totalPrice").val(itemOrderQty * itemPrice);

    /*let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemQty}</td><td>${itemOrderQty}</td><td>${total}</td>
                <td><button id="btnItemCartDelete" type="button" class="btn-sm btn-danger">Delete</button>
                <button id="btnItemCartUpdate" type="button" class="btn-sm btn-primary">Update</button></tr>`;

    $("#orderTable").append(row);*/

    for (var i = 0; i < itemDB.length; i++) {
        if ($("#txtCustId").val()==itemDB[i].id){
            itemCode = itemDB[i].id;
            itemName = itemDB[i].name;
            itemPrice = itemDB[i].price;
            itemQty = itemDB[i].qtyOnHand;
        }
        let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemQty}</td><td>${itemOrderQty}</td><td>${total}</td>
                <td><button id="btnItemCartDelete" type="button" class="btn-sm btn-danger">Delete</button>
                <button id="btnItemCartUpdate" type="button" class="btn-sm btn-primary">Update</button></tr>`;

        $("#orderTable").append(row);
    }
};

function loadItemCartTable(){
    $("#orderTable>tr").click(function () {
        let itemId = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let unitPrice = $(this).children(":eq(2)").text();
        let qtyOnHand = $(this).children(":eq(3)").text();
        let orderQty = $(this).children(":eq(4)").text();

        $("#itemChombo").val(itemId);
        $("#orderItemName").val(itemName);
        $("#orderUnitPrice").val(unitPrice);
        $("#orderQtyOnHand").val(qtyOnHand);
        $("#orderOrderQty").val(orderQty);
    });
};

$("#btnPurchase").click(function (){
    genarateOrderId();
});



$("#btnItemCartUpdate").click(function (){

  /*let updateItemId = $("#itemChombo").val();
   let updateItemName = $("#orderItemName").val();
   let updateItemUnitPrice = $("#orderUnitPrice").val();
   let updateItemQtyOnHand = $("#orderQtyOnHand").val();
   let updateItemOrderQty = $("#orderOrderQty").val();

    updateItemId = updateItemId;
    updateItemName = updateItemName;
    updateItemUnitPrice = updateItemUnitPrice;
    updateItemQtyOnHand = updateItemQtyOnHand;
    updateItemOrderQty = updateItemOrderQty;*/

});

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

$("#btnPurchase").click(function (){
    console.log("Enter");
    genarateOrderId();
});
