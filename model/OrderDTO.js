function Orders(orderId, customerId, date, discount, total) {
    this.__oid = orderId;
    this.__cid = customerId;
    this.__date = date;
    this.__discount = discount;
    this.__tot = total;

    this.getOrderId = function () {
        return this.__oid;
    }
    this.setOrderId = function (orderId) {
        this.__oid = orderId;
    }

    this.getCustomerID = function () {
        return this.__cid;
    }
    this.setCustomerID = function (customerId) {
        this.__cid = customerId;
    }

    this.getDate = function () {
        return this.__date;
    }
    this.setDate = function (date) {
        this.__date = date;
    }

    this.getDiscount = function () {
        return this.__discount;
    }
    this.setDiscount = function (discount) {
        this.__discount = discount;
    }

    this.getTotal = function () {
        return this.__tot;
    }
    this.setTotal = function (total) {
        this.__tot = total;
    }
}