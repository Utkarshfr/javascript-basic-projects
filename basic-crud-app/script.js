var rowVal = null;

let displayData = () => {
    let temp = ValidateForm();
	if(temp === true && rowVal !== null){
		let data = GetData();
		rowVal[0].innerHTML = data['name'];
		rowVal[1].innerHTML = data['age'];
		rowVal[2].innerHTML = data['email'];
		rowVal[3].innerHTML = data['country'];
	}
    else if(temp){
        insertData();
    }else{
		document.getElementById("error-msg").style.display = "block";
		return;
	}
	document.getElementById("error-msg").style.display = "none";
}

let ValidateForm = () => {
    if(document.getElementById("name").value.trim() === ""){
        return false;
    }
    if(document.getElementById("country").value.trim() === ""){
        return false;
    }
    return true;
}

let GetData = () => {
    var obj = {};
    obj['name'] = document.getElementById("name").value;
    obj['age'] = document.getElementById("age").value;
    obj['email'] = document.getElementById("email").value;
    obj['country'] = document.getElementById("country").value;
    return obj;
}

let insertData = () => {
    let data = GetData();
    let table = document.getElementById("newData");
	let rows = table.length;
	let row = table.insertRow(-1);
	row.insertCell(-1).innerHTML = data['name'];
	row.insertCell(-1).innerHTML = data['age'];
	row.insertCell(-1).innerHTML = data['email'];
	row.insertCell(-1).innerHTML = data['country'];
	row.insertCell(-1).innerHTML = "<a onclick='DeleteData(this)'>delete</a><a onclick='EditData(this)'>edit</a>";
}

let DeleteData = (ref) => {
    let index = ref.parentElement.parentElement.rowIndex;
	document.getElementById("newData").deleteRow(index);
}


let EditData = (ref) => {
	let index = ref.parentElement.parentElement.rowIndex;
	rowVal = document.getElementById("newData").rows[index].cells;
	document.getElementById("name").value = rowVal[0].innerHTML;
	document.getElementById("age").value = rowVal[1].innerHTML;
	document.getElementById("email").value = rowVal[2].innerHTML;
	document.getElementById("country").value = rowVal[3].innerHTML;
}