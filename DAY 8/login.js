
var attempt = 3;

function loginAccount() {
	var uname = document.getElementById("username").value;
	var pword = document.getElementById("password").value;

	if (uname == "ambi" && pword == "ambi") {
		alert("Logged in successfully.");
		window.location = "Home.html";
	}
	else if (uname == "" || pword == "") {
		alert("Please fill up username and password.");
	}
	else {
		if (uname != "ambi") {
			alert("Username is invalid.");
		}
		else if (pword != "ambi") {
			alert("Password is invalid.");
		}

		attempt--;

		if (attempt == 0) {
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("button").disabled = true;
		}
	}
}

var idNumber = 0;

function saveToTable() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	var table = document.getElementById("dataTable");

	if (user != "" && pass != "") {
		//table.setAttribute("border", 1);
		//table.setAttribute("cellspading", 5);
		var rows = table.insertRow(0);
		var cols1 = rows.insertCell(0);
		var cols2 = rows.insertCell(1);
		var cols3 = rows.insertCell(2);
		var cols4 = rows.insertCell(3);
		//cols1.innerHTML = idNumber + 1;
		//idNumber = idNumber + 1;
		cols1.innerHTML = Math.floor(Math.random() * 90000) + 10000;
		cols2.innerHTML = user;
		cols3.innerHTML = pass;
		var now = new Date();
		cols4.innerHTML = now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear();
		rows.appendChild(cols1);
		rows.appendChild(cols2);
		rows.appendChild(cols3);
		rows.appendChild(cols4);
		table.appendChild(rows);

		document.getElementById("headings").style.visibility = "visible";
		document.getElementById("dataTable").style.visibility = "visible";
	}
	else {
		alert("Nothing to add. Please input username and password.");
	}
}