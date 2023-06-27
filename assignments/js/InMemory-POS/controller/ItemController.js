//load all existing items
getAllItems();

//add item event
$("#saveItem").click(function () {
    if (checkAllItems()){
        saveItem();
    }
});


//bind tr events for getting back data of the rows to text fields
function bindItemTrEvents() {
    $('#tblItem>tr').click(function () {
        //get the selected rows data
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let description = $(this).children().eq(2).text();
        let buyPrice = $(this).children().eq(3).text();
        let sellPrice = $(this).children().eq(4).text();
        let qty = $(this).children().eq(5).text();

        //set the selected rows data to the input fields
        $("#setItemCode").text(code);
        $("#setItemName").text(name);
        $("#setItemDescription").text(description);
        $("#setItemBuyPrice").text(buyPrice);
        $("#setItemSellPrice").text(sellPrice);
        $("#setItemQTY").text(qty);

        $("#itemCode").val(code);
        $("#itemNameItem").val(name);
        $("#itemDescriptionItem").val(description);
        $("#itemBuyingPrice").val(buyPrice);
        $("#itemSellingPrice").val(sellPrice);
        $("#itemQty").val(qty);
    })
}

//delete btn event
$("#btnItemRemove").click(function () {
    let code = $("#itemCode").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(code);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItems();
        } else {
            alert("Item Not Removed..!");
        }
    }
});

//update  btn event
$("#btnItemUpdate").click(function () {
    let code = $("#itemCode").val();
    updateItem(code);
    clearItemInputFields();
});

//clear btn event
$("#btnItemClear").click(function () {
    $("#setItemCode,#setItemName,#setItemDescription,#setItemBuyPrice,#setItemSellPrice,#setItemQTY").text("");
    clearItemInputFields();
});



// CRUD operation Functions
function saveItem() {
    let itemCode = $("#itemCode").val();
    //check item is exists or not?
    if (searchItem(itemCode.trim()) == undefined) {

        //if the customer is not available then add him to the array
        let itemName = $("#itemNameItem").val();
        let itemDescription=$("#itemDescriptionItem").val();
        let itemBuyPrice=$("#itemBuyingPrice").val();
        let itemSellPrice=$("#itemSellingPrice").val();
        let itemQty=$("#itemQty").val();

        //by using this one we can create a new object using
        //the item model with same properties
        let newItem = Object.assign({}, item);
        newItem.code = itemCode;
        newItem.name = itemName;
        newItem.description = itemDescription;
        newItem.buyingPrice = itemBuyPrice;
        newItem.sellingPrice = itemSellPrice;
        newItem.qty = itemQty;


        //add item record to the item array (DB)
        itemDB.push(newItem);
        clearItemInputFields();
        getAllItems();

    } else {
        alert("Item already exits.!");
        clearItemInputFields();
    }
}

function getAllItems() {
    let count = 0;
    //clear all tbody data before add
    $("#tblItem").empty();
    $('#cmbItems').empty();

    //get all items
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let name = itemDB[i].name;
        let description = itemDB[i].description;
        let buyPrice = itemDB[i].buyingPrice;
        let sellPrice = itemDB[i].sellingPrice;
        let qty = itemDB[i].qty;

        $('#cmbItems').append(`<option class="options" value="${count}">${code}</option>`);
        count++;

        let row = `<tr>
                      <td>${code}</td>
                      <td>${name}</td>
                      <td>${description}</td>
                      <td>${buyPrice}</td>
                      <td>${sellPrice}</td>
                      <td>${qty}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblItem").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work
        bindItemTrEvents();
    }
}


function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            itemDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchItem(code) {
    return itemDB.find(function (item) {
        //if the search code match with item record
        //then return that object
        return item.code == code;
    });
}

function updateItem(code) {
    if (searchItem(code) == undefined) {
        alert("No such Item..please check the Code");
    } else {
        let consent = confirm("Do you really want to update this Item.?");
        if (consent) {
            let item = searchItem(code);
            //if the item available can we update.?

            let itemName = $("#itemNameItem").val();
            let itemDescription = $("#itemDescriptionItem").val();
            let itemBuyPrice = $("#itemBuyingPrice").val();
            let itemSellPrice = $("#itemSellingPrice").val();
            let itemQty = $("#itemQty").val();

            item.name = itemName;
            item.description = itemDescription;
            item.buyingPrice = itemBuyPrice;
            item.sellingPrice = itemSellPrice;
            item.qty = itemQty;

            getAllItems();
        }
    }
}