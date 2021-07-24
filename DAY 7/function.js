
function populate() {
	var prod = document.getElementById("products");
	var prods = new Array("Apple", "Orange", "Lemon", "Grapes", "Banana", "Mango", "Pineapple");
	var qty = document.getElementById("quantity");
	var now = new Date();

	for (p = 0; p < prods.length; p++) {
		var opt = document.createElement("option");
		opt.value = opt.text = prods[p];
		prod.add(opt);
	}

	for (q = 1; q <= 20 ; q++) {
		var opt = document.createElement("option");
		opt.value = opt.text = q;
		qty.add(opt);
	}

	document.getElementById("dateToday").value = now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear();
}

function text() {
	var name = document.getElementById("name").value;

	if (!isNaN(name)) {
		document.getElementById("name").value = "";
	}
}

function num() {
	var money = document.getElementById("cash").value;
	var code = document.getElementById("prodCode").value;

	if (isNaN(money)) {
		document.getElementById("cash").value = "";
	}
	if (isNaN(code)) {
		document.getElementById("prodCode").value = "";
	}
}

function cash() {
	document.getElementById("cash").style.visibility = "visible";
	document.getElementById("cash").value = "";
}

function card() {
	document.getElementById("cash").style.visibility = "hidden";
	document.getElementById("cash").value = "9999999";
}

var pieces1 = 50;
var pieces2 = 50;
var pieces3 = 50;
var pieces4 = 50;
var pieces5 = 50;
var pieces6 = 50;
var pieces7 = 50;

function purchase() {
	var name = document.getElementById("name").value;
	var Name = name.toUpperCase();
	var code = document.getElementById("prodCode").value;
	var prod = document.getElementById("products").value;
	var qty = document.getElementById("quantity").value;
	var total = 0;
	var cash = document.getElementById("payCash");
	var card = document.getElementById("payCard");
	var money = document.getElementById("cash").value;
	var change = 0;
	var inter = 0;
	var item;

	if (prod == "Apple") {
		total = qty * 20;
		item = "applePcs";
		pieces1 = pieces1 - qty;
		pieces = pieces1;
	}
	else if (prod == "Orange") {
		total = qty * 40;
		item = "orangePcs";
		pieces2 = pieces2 - qty;
		pieces = pieces2;
	}
	else if (prod == "Lemon") {
		total = qty * 50;
		item = "lemonPcs";
		pieces3 = pieces3 - qty;
		pieces = pieces3;
	}
	else if (prod == "Grapes") {
		total = qty * 80;
		item = "grapesPcs";
		pieces4 = pieces4 - qty;
		pieces = pieces4;
	}
	else if (prod == "Banana") {
		total = qty * 90;
		item = "bananaPcs";
		pieces5 = pieces5 - qty;
		pieces = pieces5;
	}
	else if (prod == "Mango") {
		total = qty * 110;
		item = "mangoPcs";
		pieces6 = pieces6 - qty;
		pieces = pieces6;
	}
	else if (prod == "Pineapple") {
		total = qty * 120;
		item = "pineapplePcs";
		pieces7 = pieces7 - qty;
		pieces = pieces7;
	}

	if (name != "" && code != "" && (cash.checked == true || card.checked == true) && money != "") {
		if (code.length == 5) {
			var pMode;

			if (cash.checked == true && money >= total) {
				pMode = "Cash";
				change = money - total;
				document.getElementById("totall").innerHTML = total + " Php";
				document.getElementById("changee").innerHTML = change + " Php";
			}
			else if (card.checked == true) {
				pMode = "Card";
				inter = (total * .03) + total;	
				document.getElementById("totall").innerHTML = inter.toFixed(2) + " Php";
				document.getElementById("changee").innerHTML = "";
			}
			else {
				alert("Insufficient balance.");
				document.getElementById("tblOutput").style.visibility = "hidden";
				document.getElementById("x").style.visibility = "hidden";
			}

			if ((cash.checked == true && money >= total) || card.checked == true) {
				document.getElementById("clientName").innerHTML = Name;
				document.getElementById("productCode").innerHTML = code;
				document.getElementById("paymentMode").innerHTML = pMode;
				document.getElementById("tblOutput").style.visibility = "visible";
				document.getElementById("x").style.visibility = "visible";

				document.getElementById(item).innerHTML = "(" + pieces + " pcs left)";
			}
		}
		else {
			alert("Please input a 5-digit code.");
			document.getElementById("tblOutput").style.visibility = "hidden";
			document.getElementById("x").style.visibility = "hidden";
		}
	}
	else {
		alert("Please fill up the missing fields.");
		document.getElementById("tblOutput").style.visibility = "hidden";
		document.getElementById("x").style.visibility = "hidden";
	}
}

function x() {
	document.getElementById("name").value = "";
	document.getElementById("prodCode").value = "";
	document.getElementById("products").value = "Apple";
	document.getElementById("quantity").value = "1";
	document.getElementById("payCash").checked = false;
	document.getElementById("payCard").checked = false;
	document.getElementById("cash").style.visibility = "hidden";
	document.getElementById("cash").value = "";

	document.getElementById("tblOutput").style.visibility = "hidden";
	document.getElementById("x").style.visibility = "hidden";
}