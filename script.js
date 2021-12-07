var selecteRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = realFormDate();
    if(selecteRow === null){

        insertNewRecord(formData);
    }

}

// Restritive the data 
function realFormDate(){
    var formDate = {};
    formDate["productCode"] = document.getElementById("productCode").value;
    formDate["product"] = document.getElementById("product").value;
    formDate["qty"] = document.getElementById("qty").value;
    formDate["perPrice"] = document.getElementById("perPrice").value;
    return formDate;
    
}

// Insert the data 
function insertNewRecord(data){
     var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
     var newrow = table.insertRow(table.length);
     var cell1 = newrow.insertCell(0);
         cell1.innerHTML = data.productCode;
     var cell2 = newrow.insertCell(1);
         cell2.innerHTML = data.product;
    var cell3 = newrow.insertCell(2);
         cell3.innerHTML = data.qty;
    var cell4 = newrow.insertCell(3);
         cell4.innerHTML = data.perPrice;
    var cell5 = newrow.insertCell(4);
         cell5.innerHTML = `<buttom>Edit</buttom> <buttom>Delete</buttom>` 

    }
    // Edit the data 
    function onEdit(td){

        selecteRow = td.parentElement.parentElement;
        document.getElementById("productCode").value = selecteRow.cells[0].innerHTML;
        document.getElementById("product").value = selecteRow.cells[1].innerHTML;
        document.getElementById("qty").value = selecteRow.cells[2].innerHTML;
        document.getElementById("perPrice").value = selecteRow.cells[3].innerHTML;
    }

    function updateRecord(formData){

        selecteRow.cells[0].innerHTML = formData.productCode;
        selecteRow.cells[1].innerHTML = formData.product;
        selecteRow.cells[2].innerHTML = formData.qty;
        selecteRow.cells[3].innerHTML = formData.perPrice;
    }
