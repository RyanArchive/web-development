
function num() {
	var bas = document.getElementById("base").value;
	var hei = document.getElementById("height").value;

	if (isNaN(bas) || isNaN(hei)) {
		document.getElementById("base").value = 
		document.getElementById("height").value = "";
	}
}

function area() {
	var bas = document.getElementById("base").value;
	var hei = document.getElementById("height").value;
	var area = (bas * hei) * 0.5;

	var table = document.getElementById("history");
	var rows = table.insertRow(0);
	var cols1 = rows.insertCell(0);
	var cols2 = rows.insertCell(1);
	var cols3 = rows.insertCell(2);

	if (bas != "" && hei != "") {
		document.getElementById("output").innerHTML = "Area is: " + area;

		cols1.innerHTML = bas;
		cols2.innerHTML = hei;
		cols3.innerHTML = area;
	}
	else {
		alert("Please input base and height.");
	}

	rows.appendChild(cols1);
	
	rows.appendChild(cols2);
	rows.appendChild(cols3);
	table.appendChild(rows);
}