// validation for item
const ITEM_CODE_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_NAME_REGEX = /^[A-z ]{3,}$/;
const ITEM_DESCRIPTION_REGEX = /^[0-9/A-z. ,-]{7,}$/;
const ITEM_BUYPRICE_REGEX = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
const ITEM_SELLPRICE_REGEX = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
const ITEM_QTY_REGEX = /^[0-9]{1,}$/;

//add validations and text fields to the
let i_vArray = new Array();
i_vArray.push({field: $("#itemCode"), regEx: ITEM_CODE_REGEX});
i_vArray.push({field: $("#itemNameItem"), regEx: ITEM_NAME_REGEX});
i_vArray.push({field: $("#itemDescriptionItem"), regEx: ITEM_DESCRIPTION_REGEX});
i_vArray.push({field: $("#itemBuyingPrice"), regEx: ITEM_BUYPRICE_REGEX});
i_vArray.push({field: $("#itemSellingPrice"), regEx: ITEM_SELLPRICE_REGEX});
i_vArray.push({field: $("#itemQty"), regEx: ITEM_QTY_REGEX});

function clearItemInputFields() {
    $("#itemCode,#itemNameItem,#itemDescriptionItem,#itemBuyingPrice,#itemSellingPrice,#itemQty").val("");
    $("#itemCode,#itemNameItem,#itemDescriptionItem,#itemBuyingPrice,#itemSellingPrice,#itemQty").css("border", "1px solid #ced4da");
    $("#itemCode").focus();
}

//disable tab
$("#itemCode,#itemNameItem,#itemDescriptionItem,#itemBuyingPrice,#itemSellingPrice,#itemQty").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = i_vArray.indexOf(i_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkItemValidations(i_vArray[indexNo]);


    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != i_vArray[i_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkItemValidations(i_vArray[indexNo])) {
                i_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkItemValidations(i_vArray[indexNo])) {
                saveItem();
            }
        }
    }
});


function checkItemValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setItemBorder(true, object)
        return true;
    }
    setItemBorder(false, object)
    return false;
}

function setItemBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

}

function checkAllItems() {
    for (let i = 0; i < i_vArray.length; i++) {
        if (!checkItemValidations(i_vArray[i])) return false;
    }
    return true;
}