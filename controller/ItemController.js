$("#popBtnAdd").click(function () {
    $("#itemTable>tr").off("click");

    saveItem();
    loadAllItem();
    loadItemDataTextField();



    clearItemPopData();
});

function loadItemDataTextField(){
    $("#itemTable>tr").click('click',function () {
        /*console.log($(this));*/
        let itemCode1 = $(this).children(":eq(0)").text();
        let itemName1 = $(this).children(":eq(1)").text();
        let itemPrice1 = $(this).children(":eq(2)").text();
        let itemQtyOnHand1 = $(this).children(":eq(3)").text();

        $("#txtItemCode").val(itemCode1);
        $("#txtItemName").val(itemName1);
        $("#txtItemPrice").val(itemPrice1);
        $("#txtItemQTYOnHand").val(itemQtyOnHand1);
    });
};

function saveItem() {
    let itemCode = $("#txtPopItemCode").val();
    let itemName = $("#txtPopItemName").val();
    let itemPrice = $("#txtPopItemPrice").val();
    let itemQtyOnHand = $("#txtPopItemQuntity").val();

    var itemObject = {
        id: itemCode,
        name: itemName,
        price: itemPrice,
        qtyOnHand: itemQtyOnHand
    };
    itemDB.push(itemObject);

    loadItemChomboBoxData("<option>"+itemCode+"</option>");

};

$("#btnItemUpdate").click(function () {
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQtyOnHand = $("#txtItemQTYOnHand").val();

    for (var i = 0; i < itemDB.length; i++) {
        if ($("#txtItemCode").val()==itemDB[i].id){
            console.log("Enter");
            itemDB[i].id= itemCode;
            itemDB[i].name=itemName;
            itemDB[i].price=itemPrice;
            itemDB[i].qtyOnHand=itemQtyOnHand;
        }
    }
    loadAllItem();
    clearAllItem();
    loadItemDataTextField();
});

$("#itemTable").on('click', '#btnItemDelete', function () {
    var index = 0;
    for (var i = 0; i < itemDB.length; i++) {
        if ($("#txtItemCode").val() == itemDB[i].id) {
            index = i;
        }
    }
    itemDB.splice(index, 1);

    clearAllItem();

    $(this).closest('tr').remove();

});

function loadAllItem() {
    $("#itemTable").empty();
    for (var i of itemDB) {
        /*create a html row*/
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.price}</td><td>${i.qtyOnHand}</td>
            <td><button id="btnItemDelete" type="button" class="btn-sm btn-danger">Delete</button></tr>`;
        /*select the table body and append the row */
        $("#itemTable").append(row);
    }
}

$("#btnItemSearch").click(function () {
    var searchID = $("#ItemPpoSearchBar").val();

    var response = searchItem(searchID);
    if (response) {
        $("#txtItemCode").val(response.id);
        $("#txtItemName").val(response.name);
        $("#txtItemPrice").val(response.price);
        $("#txtItemQTYOnHand").val(response.qtyOnHand);
    } else {
        clearAllItem();
        alert("No Such a Item");
    }
});

function searchItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].id == id) {
            return itemDB[i];
        }
    }
}

var regExItemCode = /^(I00-)[0-9]{3,4}$/;
var regExItemName = /^[A-z ]{3,20}$/;
var regExItemPrice = /^[0-9]{1,10}$/;
var regExItemQtyOnHand = /^[0-9]{1,3}$/;

$("#txtPopItemCode").keyup(function (event) {
    let input = $("#txtPopItemCode").val();

    if (regExItemCode.test(input)) {
        $("#txtPopItemCode").css('border', '2px solid green');
        $("#popItemError").text("");

        if (event.key == "Enter") {
            $("#txtPopItemName").focus();
        }
    } else {
        $("#txtPopItemCode").css('border', '2px solid red');
        $("#popItemError").text("Wrong format:I00-001");
    }
});

$("#txtPopItemName").keyup(function (event) {
    let input = $("#txtPopItemName").val();

    if (regExItemName.test(input)) {
        $("#txtPopItemName").css('border', '2px solid green');
        $("#popItemError1").text("");

        if (event.key == "Enter") {
            $("#txtPopItemQuntity").focus();
        }
    } else {
        $("#txtPopItemName").css('border', '2px solid red');
        $("#popItemError1").text("Wrong format:Soap");
    }
});

$("#txtPopItemQuntity").keyup(function (event) {
    let input = $("#txtPopItemQuntity").val();

    if (regExItemQtyOnHand.test(input)) {
        $("#txtPopItemQuntity").css('border', '2px solid green');
        $("#popItemError2").text("");

        if (event.key == "Enter") {
            $("#txtPopItemPrice").focus();
        }
    } else {
        $("#txtPopItemQuntity").css('border', '2px solid red');
        $("#popItemError2").text("Wrong format:10");
    }
});

$("#txtPopItemPrice").keyup(function (event) {
    let input = $("#txtPopItemPrice").val();

    if (regExItemPrice.test(input)) {
        $("#txtPopItemPrice").css('border', '2px solid green');
        $("#popItemError3").text("");
    } else {
        $("#txtPopItemPrice").css('border', '2px solid red');
        $("#popItemError3").text("Wrong format:150");
    }
});

$("#txtItemCode").keyup(function (event) {
    let input = $("#txtItemCode").val();

    if (regExItemCode.test(input)) {
        $("#txtItemCode").css('border', '2px solid green');
        $("#ItemError").text("");

        if (event.key == "Enter") {
            $("#txtItemName").focus();
        }
    } else {
        $("#txtItemCode").css('border', '2px solid red');
        $("#ItemError").text("Wrong format:I00-001");
    }
});

$("#txtItemName").keyup(function (event) {
    let input = $("#txtItemName").val();

    if (regExItemName.test(input)) {
        $("#txtItemName").css('border', '2px solid green');
        $("#ItemError1").text("");

        if (event.key == "Enter") {
            $("#txtItemPrice").focus();
        }
    } else {
        $("#txtItemName").css('border', '2px solid red');
        $("#ItemError1").text("Wrong format:Soap");
    }
});

$("#txtItemPrice").keyup(function (event) {
    let input = $("#txtItemPrice").val();

    if (regExItemPrice.test(input)) {
        $("#txtItemPrice").css('border', '2px solid green');
        $("#ItemError2").text("");

        if (event.key == "Enter") {
            $("#txtItemQTYOnHand").focus();
        }
    } else {
        $("#txtItemPrice").css('border', '2px solid red');
        $("#ItemError2").text("Wrong format:10");
    }
});

$("#txtItemQTYOnHand").keyup(function (event) {
    let input = $("#txtItemQTYOnHand").val();

    if (regExItemQtyOnHand.test(input)) {
        $("#txtItemQTYOnHand").css('border', '2px solid green');
        $("#ItemError3").text("");
    } else {
        $("#txtItemQTYOnHand").css('border', '2px solid red');
        $("#ItemError3").text("Wrong format:150");
    }
});

function clearItemPopData() {
    $('#txtPopItemCode,#txtPopItemName,#txtPopItemQuntity,#txtPopItemPrice').val("");
    $('#txtPopItemCode,#txtPopItemName,#txtPopItemQuntity,#txtPopItemPrice').css('border', '2px solid #ced4da');
    $('#txtPopItemCode').focus();
    /* $("#popBtnAdd").attr('disabled', true);*/
    /*loadAllCustomers();*/
    /*$("#lblcusid,#lblcusname,#lblcusaddress,#lblcussalary").text("");*/
}

function clearAllItem() {
    $('#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQTYOnHand').val("");
    $('#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQTYOnHand').css('border', '2px solid #ced4da');
    $('#txtItemCode').focus();
    /* $("#popBtnAdd").attr('disabled', true);*/
    /*loadAllCustomers();*/
    /*$("#lblcusid,#lblcusname,#lblcusaddress,#lblcussalary").text("");*/
}