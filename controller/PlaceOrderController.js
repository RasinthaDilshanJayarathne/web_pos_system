function generateOrderID() {
    $("#orderId").val("O00-0001");
    var orderId=orderDB[orderDB.length-1].getOrderId();
    var tempId = parseInt(orderId.split("-")[1]);
    tempId = tempId+1;
    if (tempId <= 9){
        $("#orderId").val("O00-000"+tempId);
    }else if (tempId <= 99) {
        $("#orderId").val("O00-00" + tempId);
    }else if (tempId <= 999){
        $("#orderId").val("O00-0" + tempId);
    }else {
        $("#orderId").val("O00-"+tempId);
    }
}

var tableRowCount;

$("#addToCart").click(function () {

    var duplicate = false;
    for (var i = 0; i < $("#orderTable tr").length; i++) {
        if($("#itemChombo option:selected").text()==$("#orderTable tr").children(':nth-child(1)')[i].innerText){
            duplicate=true;
        }
    }
    if (duplicate != true) {
        loadItemData();
        minusQty($("#orderOrderQty").val());
    }else if (duplicate == true){
        manageQuantity(tableRowCount.children(':nth-child(4)').text(),$("#orderOrderQty").val());
        $(tableRowCount).children(':nth-child(4)').text($("#orderOrderQty").val());

    }

    $("#orderTable>tr").click(function () {

        tableRowCount =$(this);

        let itemId = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let unitPrice = $(this).children(":eq(2)").text();
        let orderQty = $(this).children(":eq(3)").text();

        $("#itemChombo").val(itemId);
        $("#orderItemName").val(itemName);
        $("#orderUnitPrice").val(unitPrice);
        $("#orderOrderQty").val(orderQty);
    });
    /*clearItemData();*/

});

function minusQty(orderQty){
    var minusQty = parseInt(orderQty);
    var manageQty = parseInt($("#orderQtyOnHand").val());

    manageQty = manageQty - minusQty;

    $("#orderQtyOnHand").val(manageQty);
}

function manageQuantity(prevQty,nowQty){
    var prevQty = parseInt(prevQty);
    var nowQty = parseInt(nowQty);
    var availableQty = parseInt($("#orderQtyOnHand").val());

    availableQty = availableQty + prevQty;
    availableQty = availableQty - nowQty;

    $("#orderQtyOnHand").val(availableQty);

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

let itemCode;let itemName;let itemPrice;let itemQty;let itemOrderQty;let subTotal;

$("#orderTable").empty();
function loadItemData() {

    itemCode = $("#itemChombo").val();
    itemName = $("#orderItemName").val();
    itemPrice = $("#orderUnitPrice").val();
    itemQty = $("#orderQtyOnHand").val();
    itemOrderQty = $("#orderOrderQty").val();

    let total;
    let discount;

    total = itemPrice * itemOrderQty;


    $("#totalPrice").val(itemOrderQty * itemPrice);

    $("#orderTable").append("<tr>" +
        "<td>" + itemCode + "</td>" +
        "<td>" + itemName + "</td>" +
        "<td>" + itemPrice + "</td>" +
        "<td>" + itemOrderQty + "</td>" +
        "<td>" + total + "</td>" +
        `<td><button id="btnItemCartDelete" type="button" class="btn-sm btn-danger">Delete</button></td>`+
        "</tr>");

    /*$("#total").val(total);*/

    calculateDiscount();

};

function calculateDiscount(){
    if (total >= 10000){
        discount = $("#discountCmb").val((total/100) * 20);
        $("#subToal").val(total - discount);
    }else if(total >= 8000 && total < 9999){
        discount = $("#discountCmb").val((total/100) * 15);
        $("#subToal").val(total - discount);
    }else if(total >= 6000 && total < 7999){
        discount = $("#discountCmb").val((total/100) * 10);
        $("#subToal").val(total - discount);
    }else if(total >= 2000 && total < 5999) {
        discount = $("#discountCmb").val((total / 100) * 5);
        $("#subToal").val(total - discount);
    }else {
        $("#discountCmb").val("00");
    }
}

$("#btnPurchase").click(function (){

    placeOrder();
    pushOrderDetails();
    clearCustomerData();
    clearItemData();
    generateOrderID();
});

function placeOrder(){

    let orderId = $("#orderId").val();
    let customerId = $("#custChombo").val();
    let date = $("#orderDate").val();
    discount = $("#discountCmb").val();
    subTotal = $("#subToal").val();

    orderDB.push(new OrderDTO(orderId,customerId,date,discount,subTotal));
}

function pushOrderDetails(){

    for (let i = 0; i < $("#orderTable tr").length; i++){
        var orderDetail = new OrderDetailDTO(
            $("#orderId").val(),
            $("#orderDate").val(),
            $("#custChombo").val(),
            $("#orderCustName").val(),
            $("#orderTable tr").children(':nth-child(1)')[i].innerText,
            $("#orderTable tr").children(':nth-child(2)')[i].innerText,
            $("#orderTable tr").children(':nth-child(5)')[i].innerText,
            $("#orderTable tr").children(':nth-child(6)')[i].innerText)

        orderDetailDB.push(orderDetail);
    }
}

$("#btnOrderDetail").click(function (){
    loadAllOrderDetail();
});

$("#orderTable").on('click', '#btnItemCartDelete', function () {
    $(this).closest('tr').remove();
    $('#discountCmb,#total').val("");
    clearItemData();

});

function clearItemData() {
    $('#itemChombo,#orderItemName,#orderUnitPrice,#orderQtyOnHand,#orderOrderQty,orderId,orderDate').val("");
}

function clearCustomerData() {
    $('#custChombo,#orderCustName,#orderTelephoneNo,#orderAddress,#orderDate').val("");
}