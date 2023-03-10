var row_data = null;

function Submit() {
    var eId = document.getElementById("eID").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Ph_no = document.getElementById("phNum").value;
    
    var arr = [eId, name, email, Ph_no];
    
    var read_data = readingData(arr);
    
    if (row_data == null) {
    insert(read_data);
    msg.innerHTML = "Data Updated";
    } else {
    update(arr);
    msg.innerHTML = "Data Updated";
    }
}

function readingData(arr) {
    var json_data = {
      EID: arr[0],
      Name: arr[1],
      Email: arr[2],
      Ph_no: arr[3]
    }
    var userData = JSON.stringify(json_data);
    localStorage.setItem(arr[0], userData);
    var userData_ext = localStorage.getItem(arr[0]);
    var jsonData_ext = JSON.parse(userData_ext);
    
    jsonData_ext.EID= arr[0];
    jsonData_ext.Name=arr[1];
    jsonData_ext.Email=arr[2];
    jsonData_ext.Ph_no=arr[3];
    
    console.log(arr)
    var updatedData = JSON.stringify(jsonData_ext);
    localStorage.setItem(arr[0], updatedData);

    var get_id = jsonData_ext.EID;
    var get_name = jsonData_ext.Name;
    var get_email = jsonData_ext.Email;
    var get_phNo = jsonData_ext.Ph_no;

  
    var get_arr = [get_id, get_name, get_email, get_phNo];
  
    return get_arr;
  }

function insert(arr){
    var table= document.getElementById('myTable');
    var row= table.insertRow();
    row.insertCell(0).innerHTML= arr[0];
    row.insertCell(1).innerHTML= arr[1];
    row.insertCell(2).innerHTML= arr[2];
    row.insertCell(3).innerHTML= arr[3];
    row.insertCell(4).innerHTML='<button class="btn btn-primary" onclick=edit(this)>Edit</button> <button class="btn btn-primary" onclick=remove(this)>Delete</button>'
}
function edit(td){
    row= td.parentElement.parentElement;
    document.getElementById('eID').value= row.cells[0].innerHTML;
    document.getElementById('name').value= row.cells[1].innerHTML;
    document.getElementById('email').value= row.cells[2].innerHTML;
    document.getElementById('phNum').value= row.cells[3].innerHTML;
    row_data=row;   
}
function update(arr){
    row.cells[0].innerHTML= document.getElementById('eID').value;
    row.cells[1].innerHTML= document.getElementById('name').value;
    row.cells[2].innerHTML= document.getElementById('email').value;
    row.cells[3].innerHTML= document.getElementById('phNum').value;
    row_data= null;
}
function remove(td){
    var prompt = confirm("Are you sure you want to delete?");
    if(prompt==true){
        var row= td.parentElement.parentElement;
        var n = row.cells[0].innerHTML;document.getElementById("eID").value;
        localStorage.removeItem(n);
        document.getElementById("myTable").deleteRow(row.rowIndex);
    }
}
window.onload=function(){
    loadTableData();
}
function loadTableData(){
    var table= document.getElementById('myTable');
    for (var i=0; i<localStorage.length ;i++){
        var key=localStorage.key(i);
        if(key!=null){
            var data= JSON.parse(localStorage.getItem(key));
            var row= table.insertRow();
            row.insertCell(0).innerHTML= data.EID;
            row.insertCell(1).innerHTML= data.Name;
            row.insertCell(2).innerHTML= data.Email;
            row.insertCell(3).innerHTML= data.Ph_no;
            row.insertCell(4).innerHTML='<button class="btn btn-primary" onclick=edit(this)>Edit</button> <button class="btn btn-primary" onclick=remove(this)>Delete</button>'

        }
    }
}