function OrderDetail(orderId, itemCode, orderQty, totAmount) {
    this.__oid = orderId;
    this.__code = itemCode;
    this.__qty = orderQty;
    this.__totAmount = totAmount;

    this.getOrderid = function () {
        return this.__oid;
    }
    this.setOrderid = function (orderId) {
        this.__oid = orderId;
    }

    this.getItemCode = function () {
        return this.__code;
    }
    this.setItemCode = function (itemCode) {
        this.__code = itemCode;
    }

    this.getItemQty = function () {
        return this.__qty;
    }
    this.setItemQty = function (orderQty) {
        this.__qty = orderQty;
    }

    this.getTotAmount = function () {
        return this.__totAmount;
    }
    this.setTotAmount = function (totAmount) {
        this.__totAmount = totAmount;
    }
}