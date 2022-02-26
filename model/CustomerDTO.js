function CustomerDTO(){
    var customerId;
    var customerName;
    var customerAddress;
    var customerPhone;

    this.getCustomerId = function (){
        return this.customerId;
    }
    this.setCustomerId = function (customerId){
        this.customerId = customerId;
    }
    this.getCustomerName = function (){
        return this.customerName;
    }
    this.setCustomerName = function (customerName){
        this.customerName = customerName;
    }
    this.getCustomerAddress = function (){
        return this.customerAddress;
    }
    this.setCustomerAddress = function (customerAddress){
        this.customerAddress = customerAddress;
    }
    this.getCustomerPhoneNo = function (){
        return this.customerPhone;
    }
    this.setCustomerPhoneNo = function (customerPhone){
        this.customerPhone = customerPhone;
    }
}

