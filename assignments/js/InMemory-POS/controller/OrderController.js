$('#cmbCustomers').change(function () {
    let customer = customerDB[this.value];
    $('#customerName2').val(customer.name);
    $('#customerAddress2').val(customer.address);

});

$('#cmbItems').change(function () {
    let item = itemDB[this.value];
    $('#itemName').val(item.name);
    $('#itemDescription').val(item.description);
    $('#unitPrice').val(item.sellingPrice);
    $('#QtyOnHand').val(item.qty);
});

$('#txtOQty').keyup(function (event) {
    let qty = +$('#txtOQty').val();
    if ((+$('#cmbItems').val() >= 0) && (qty > 0)) {
        $('#btnAddToCart').attr('disabled', false);
    } else {
        $('#btnAddToCart').attr('disabled', true);
    }
});

$('#btnAddToCart').click(function () {
    let QtyOnHand = +$('#QtyOnHand').val();
    let qty = +$('#txtOQty').val();
    let tempOD = getExistingOrderDetail(itemDB[+$('#cmbItems').val()].code);
    if (tempOD == null) {
        if (QtyOnHand >= qty) {
            addToCart($('#cmbItems').val(), qty)
        } else {
            alert("error!!!!");
        }
    } else {
        qty += tempOD.qty;
        if (QtyOnHand >= qty) {
            tempOD.qty = qty;
            tempOD.cost = +(tempOD.qty) * +(tempOD.item.sellingPrice);
            loadCartItems();
        } else {
            alert("error!!!!");
        }
    }
});

let orderDetailList = [];

function getExistingOrderDetail(code) {
    for (od of orderDetailList) {
        if (od.item.code === code) {
            return od;
        }
    }
    return null;
}

function addToCart(index, qty) {
    orderDetail = new Object({
        item: itemDB[index],
        qty: +qty,
        cost: +(itemDB[index].sellingPrice) * +(qty)
    });

    orderDetailList.push(orderDetail);
    loadCartItems();
}

function loadCartItems() {
    let itemTable = $('#orderTable>tbody');
    itemTable.empty();
    let count = 0;
    for (od of orderDetailList) {
        let row = `<tr>
                    <th scope="row">${count + 1}</th>
                    <td>${od.item.code}</td>
                    <td>${od.item.name}</td>
                    <td>${od.item.description}</td>
                    <td>${od.item.sellingPrice}</td>
                    <td>${od.qty}</td>
                    <td>${od.cost}</td>
                    <td>
                        <button type="button" class="btn btn-danger btnRemoveFromCart">Remove</button>
                    </td> </tr>`;

        itemTable.append(row);
        count++;
    }
    calculateTotal();
    $('.btnRemoveFromCart').click(function(){
        removeFromDeets($(this).parents('tr').children('td').eq(0).text());
        loadCartItems();
    });
}

function removeFromDeets(code) {
    for (od of orderDetailList){
        if(od.item.code===code){
            orderDetailList.splice(orderDetailList.indexOf(od),1);
        }
    }
}

$('#cash,#discount').keyup(function () {
    calculateTotal();
});




function calculateTotal() {
    let balance;
    let total = 0;
    for (od of orderDetailList) {
        total += od.cost;
    }
    $('#lblTotal').text(total);
    let discount = +($('#discount').val());
    let subTotal;
    if (discount >= 0) {
        subTotal = total - discount;
        $('#lblSubTotal').text(subTotal);
    } else {
        subTotal = total;
        $('#lblSubTotal').text(total);
    }
    let cash = +($('#cash').val());
    if (cash > 0) {
        $('#lblBalance').text(cash - subTotal);
    } else {
        $('#lblBalance').text(0);
    }
    balance = cash - subTotal;

    return [total, subTotal, discount, cash, balance];
}

function checkOIDExists(OID) {
    for (o of orders) {
        if (o.code == OID) {
            return true;
        }
    }
    return false;
}

$('#btnPlaceOrder').click(function () {
    let OIDRegex = /^(OID-)[0-9]{1,3}$/
    let dateRegex = /^[0-9]{4}(.)[0-9]{2}(.)[0-9]{2}$/;
    if (orderDetailList.length > 0) {
        if (+$('#cmbCustomers').val() >= 0) {
            if (OIDRegex.test($('#invoiceID').val())) {
                if (dateRegex.test($('#floatingInputOrder').val())) {
                    if (!checkOIDExists($('#invoiceID').val())) {
                        let values = calculateTotal();
                        alert(values[3] - values[1]);
                        if ((values[3] - values[1]) >= 0) {
                            order = new Object({
                                code: $('#invoiceID').val(),
                                date: $('#floatingInputOrder').val(),
                                customer: customerDB[+$('#cmbCustomers').val()],
                                orderDetail: orderDetailList,
                                total: values[0],
                                discount: values[2],
                                subTotal: values[1],
                                cash: values[3],
                                balance: values[4]
                            });

                            orders.push(order);

                            for (od of orderDetailList) {
                                od.item.qty -= od.qty;
                            }
                            orderDetailList = [];
                           alert("Order Success");
                            clearOrderFields();
                        } else {
                            alert("error!!");
                        }
                    } else {
                        alert("error!!");
                    }
                } else {
                    alert("error!!");
                }
            } else {
                alert("error!!");
            }
        } else {
            alert("error!!");
        }
    } else {
        alert("error!!");
    }
});

function clearOrderFields() {
    $('#cash,#discount,#itemName,#itemDescription,#unitPrice,#txtOQty,#QtyOnHand,#invoiceID,#floatingInputOrder,#customerName2,#customerAddress2').val("");
    $('#lblTotal,#lblSubTotal,#lblBalance').text("");
    $('#orderTable>tbody').empty();
    setOrderID();
}

$('#invoiceID').keyup(function (event) {
    if (event.key === 'Enter') {
        for (o of orders) {
            if (o.code === $('#invoiceID').val()) {
                clearOrderFields();
                $('#invoiceID').val(o.code);
                $('#cmbCustomers').val(o.customer.code);
                $('#floatingInputOrder').val(o.date);
                $('#lblTotal').text(o.total);
                $('#lblSubTotal').text(o.subTotal);
                $("#lblBalance").text(o.balance);
                $('#cash').val(o.cash);
                $('#discount').val(o.discount);
                let itemTable = $('#orderTable>tbody');
                itemTable.empty();
                let count = 0;
                for (od of o.orderDetail) {
                    let row = `<tr>
                    <th scope="row">${count + 1}</th>
                    <td>${od.item.code}</td>
                    <td>${od.item.name}</td>
                    <td>${od.item.description}</td>
                    <td>${od.item.sellingPrice}</td>
                    <td>${od.qty}</td>
                    <td>${od.cost}</td>
                    </tr>`;

                    itemTable.append(row);
                    count++;

                }
            }
        }
    }
});
setOrderID();

function setOrderID(){
    if(orders.length===0){
        $('#invoiceID').val('OID-001');
    }else{
        let split =  orders[orders.length-1].code.split('-');
        let num =(+split[1])+1;
        $('#invoiceID').val('OID-' + (String(num).padStart(3,'0')));
    }
}

$('#btnOrderClear').click(function () {
    clearOrderFields();
});