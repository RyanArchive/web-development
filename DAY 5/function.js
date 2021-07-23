
function signin() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	if (user == "webdev" && pass == "vedbew") {
		alert("Welcome!");
		location.href = "Sample Sign In.html";
	}
	else if (user == "" || pass == "") {
		alert("Please fill up username and/ or password.");
	}
	else {
		alert("Incorrect username and/ or password.");
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
	}
}