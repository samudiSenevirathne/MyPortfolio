//load all existing customers
getAllCustomers();

//add customer event
$("#saveCustomer").click(function () {
    if (checkAll()){
        saveCustomer();
    }else{
        alert("Error");
    }

});


//bind tr events for getting back data of the rows to text fields
function bindTrEvents() {
    $('#tblCustomer>tr').click(function () {
        //get the selected rows data
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let nic=$(this).children().eq(2).text();
        let dob=$(this).children().eq(3).text();
        let address = $(this).children().eq(4).text();
        let salary = $(this).children().eq(5).text();

        //set the selected rows data to the input fields
        $("#setCode").text(code);
        $("#setName").text(name);
        $("#setNIC").text(nic);
        $("#setDOB").text(dob);
        $("#setAddress").text(address);
        $("#setSalary").text(salary);

        $("#customerCode").val(code);
        $("#customerName").val(name);
        $("#customerNIC").val(nic);
        $("#customerDOB").val(dob);
        $("#customerAddress").val(address);
        $("#customerSalary").val(salary);
    })
}

//delete btn event
$("#btnRemove").click(function () {
    let code = $("#customerCode").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(code);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }


});

//update  btn event
$("#btnUpdate").click(function () {
    let code = $("#customerCode").val();
    updateCustomer(code);
    clearCustomerInputFields();
});

//clear btn event
$("#btnClear").click(function () {
    clearCustomerInputFields();
    $("#setCode,#setName,#setNIC,#setDOB,#setAddress,#setSalary").text("");
});



// CRUD operation Functions
function saveCustomer() {
    let customerCode = $("#customerCode").val();
    //check customer is exists or not?
    if (searchCustomer(customerCode.trim()) == undefined) {

        //if the customer is not available then add him to the array
        let customerCode = $("#customerCode").val();
        let customerName =  $("#customerName").val();
        let customerNIC =$("#customerNIC").val();
        let customerDOB =$("#customerDOB").val();
        let customerAddress =  $("#customerAddress").val();
        let customerSalary = $("#customerSalary").val();

        //by using this one we can create a new object using
        //the customer model with same properties
        let newCustomer = Object.assign({}, customer);
        newCustomer.code = customerCode;
        newCustomer.name = customerName;
        newCustomer.nic = customerNIC;
        newCustomer.dob = customerDOB;
        newCustomer.address = customerAddress;
        newCustomer.salary = customerSalary;

        //add customer record to the customer array (DB)
        customerDB.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomers();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

function getAllCustomers() {
    let count = 0;
    //clear all tbody data before add
    $("#tblCustomer").empty();
    $('#cmbCustomers').empty();
    //get all customers
    for (let i = 0; i < customerDB.length; i++) {
        let code = customerDB[i].code;
        let name = customerDB[i].name;
        let nic = customerDB[i].nic;
        let dob = customerDB[i].dob;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;

        $('#cmbCustomers').append(`<option class="options" value="${count}">${code}</option>`);
        count++;
        let row = `<tr>
                     <td>${code}</td>
                     <td>${name}</td> 
                     <td>${nic}</td>
                     <td>${dob}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblCustomer").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work
        bindTrEvents();
    }
}


function deleteCustomer(code) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].code == code) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchCustomer(code) {
    return customerDB.find(function (customer) {
        //if the search id match with customer record
        //then return that object
        return customer.code == code;
    });
}

function updateCustomer(code) {
    if (searchCustomer(code) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(code);
            //if the customer available can we update.?

            let customerCode = $("#customerCode").val();
            let customerName =  $("#customerName").val();
            let customerNIC =$("#customerNIC").val();
            let customerDOB =$("#customerDOB").val();
            let customerAddress =  $("#customerAddress").val();
            let customerSalary = $("#customerSalary").val();

            customer.code = customerCode;
            customer.name = customerName;
            customer.nic = customerNIC;
            customer.dob = customerDOB;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomers();
        }
    }
}

