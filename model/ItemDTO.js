function itemDTO(){
    var itemCode;
    var itemName;
    var itemPrice;
    var itemQtyOnHand;

    this.getItemCode = function (){
        return this.itemCode;
    }
    this.setItemCode = function (itemCode){
        this.itemCode = itemCode;
    }
    this.getItemName = function (){
        return this.itemName;
    }
    this.setItemName = function (itemName){
        this.itemName = itemName;
    }
    this.getItemPrice = function (){
        return this.itemPrice;
    }
    this.setItemPrice = function (itemPrice){
        this.itemPrice = itemPrice;
    }
    this.getItemQtyOnHand = function (){
        return this.itemQtyOnHand;
    }
    this.setItemQtyOnHand = function (itemQtyOnHand){
        this.itemQtyOnHand = itemQtyOnHand;
    }
}