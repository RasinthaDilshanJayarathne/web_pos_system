function itemDTO(itemCode,itemName,itemPrice,itemQtyOnHand){
    this.__icode = itemCode;
    this.__iname = itemName;
    this.__iprice = itemPrice;
    this.__iqtyonhand = itemQtyOnHand;

    this.getItemCode = function (){
        return this.__icode;
    }
    this.setItemCode = function (itemCode){
        this.__icode = itemCode;
    }
    this.getItemName = function (){
        return this.__iname;
    }
    this.setItemName = function (itemName){
        this.__iname = itemName;
    }
    this.getItemPrice = function (){
        return this.__iprice;
    }
    this.setItemPrice = function (itemPrice){
        this.__iprice = itemPrice;
    }
    this.getItemQtyOnHand = function (){
        return this.__iqtyonhand;
    }
    this.setItemQtyOnHand = function (itemQtyOnHand){
        this.__iqtyonhand = itemQtyOnHand;
    }
}