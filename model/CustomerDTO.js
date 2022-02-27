function CustomerDTO(customerId, customerName, customerAddress, customerPhone) {
    this.__cid = customerId;
    this.__name = customerName;
    this.__address = customerAddress;
    this.__contact = customerPhone;

    this.getCustomerId = function () {
        return this.__cid;
    }
    this.setCustomerId = function (customerId) {
        this.__cid = customerId;
    }

    this.getCustomerName = function () {
        return this.__name;
    }
    this.setCustomerName = function (customerName) {
        this.__name = customerName;
    }

    this.getCustomerAddress = function () {
        return this.__address;
    }
    this.setCustomerAddress = function (customerAddress) {
        this.__address = customerAddress;
    }

    this.getCustomerContact = function () {
        return this.__contact;
    }
    this.setCustomerContact = function (customerPhone) {
        this.__contact = customerPhone;
    }
}

