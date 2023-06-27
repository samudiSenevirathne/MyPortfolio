// validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-z ]{5,}$/;
const CUS_NIC_REGEX = /^[0-9]{10,15}(v)?$/;
const CUS_DOB_REGEX = /^[0-9]{4}(-)[0-9]{2}(-)[0-9]{2}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

//add validations and text fields to the
let c_vArray = new Array();
c_vArray.push({field: $("#customerCode"), regEx: CUS_ID_REGEX});
c_vArray.push({field: $("#customerName"), regEx: CUS_NAME_REGEX});
c_vArray.push({field: $("#customerNIC"), regEx: CUS_NIC_REGEX});
c_vArray.push({field: $("#customerDOB"), regEx: CUS_DOB_REGEX});
c_vArray.push({field: $("#customerAddress"), regEx: CUS_ADDRESS_REGEX});
c_vArray.push({field: $("#customerSalary"), regEx: CUS_SALARY_REGEX});

function clearCustomerInputFields() {
    $("#customerCode,#customerName,#customerNIC,#customerDOB,#customerAddress,#customerSalary").val("");
    $("#customerCode,#customerName,#customerNIC,#customerDOB,#customerAddress,#customerSalary").css("border", "1px solid #ced4da");
    $("#customerCode").focus();
}

//disable tab
$("#customerCode,#customerName,#customerNIC,#customerDOB,#customerAddress,#customerSalary").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(c_vArray[indexNo]);


    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                saveCustomer();
            }
        }
    }
});


function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
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

function checkAll() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}
