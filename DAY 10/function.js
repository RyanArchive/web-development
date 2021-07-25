
function populate() {
	var brand = document.getElementById("brand");
	var brands = new Array("BMW", "Ferrari" , "Chevrolet", "Ford");

	for (var i = 0; i < brands.length; i++) {
		var opt = document.createElement("option");
		opt.value = opt.text = brands[i];
		brand.add(opt);
	}

	var quantity = document.getElementById("quantity");

	for (var j = 1; j <= 20; j++) {
		var opt = document.createElement("option");
		opt.value = opt.text = j;
		quantity.add(opt);
	}

	var color = document.getElementById("color");
	var colors = new Array("White", "Black" , "Gray", "Blue");

	for (var k = 0; k < colors.length; k++) {
		var opt = document.createElement("option");
		opt.value = opt.text = colors[k];
		color.add(opt);
	}

	var now = new Date();
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

	document.getElementById("upDate").innerHTML = "Date: " + months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
}

function models() {
	var bmw = new Array("X3", "X4", "X5", "X6");
	var ferrari = new Array("F1", "F2", "F3", "F1 Racer");
	var chevrolet = new Array("Camaro", "Sonic", "Trailblazer", "Spark", "Suburban");
	var ford = new Array("Fiesta", "Mustang", "Ranger");

	document.getElementById("model").options.length = 0;
	var brand = document.getElementById("brand").value;
	var model = document.getElementById("model");

	if (brand == "BMW") {
		for (var i = 0; i < bmw.length; i++) {
			var opt = document.createElement("option");
			opt.value = opt.text = bmw[i];
			model.add(opt);
		}
	}
	else if (brand == "Ferrari") {
		for (var i = 0; i < ferrari.length; i++) {
			var opt = document.createElement("option");
			opt.value = opt.text = ferrari[i];
			model.add(opt);
		}
	}
	else if (brand == "Chevrolet") {
		for (var i = 0; i < chevrolet.length; i++) {
			var opt = document.createElement("option");
			opt.value = opt.text = chevrolet[i];
			model.add(opt);
		}
	}
	else if (brand == "Ford") {
		for (var i = 0; i < ford.length; i++) {
			var opt = document.createElement("option");
			opt.value = opt.text = ford[i];
			model.add(opt);
		}
	}

	document.getElementById("price").innerHTML = "";
}

function prices() {
	var model = document.getElementById("model").value;

	if (model == "X3") {
		document.getElementById("price").innerHTML = "Price of X3: 1300000";
	}
	else if (model == "X4") {
		document.getElementById("price").innerHTML = "Price of X4: 1440000";
	}
	else if (model == "X5") {
		document.getElementById("price").innerHTML = "Price of X5: 1800000";
	}
	else if (model == "X6") {
		document.getElementById("price").innerHTML = "Price of X6: 2100000";
	}
	else if (model == "F1") {
		document.getElementById("price").innerHTML = "Price of F1: 2500000";
	}
	else if (model == "F2") {
		document.getElementById("price").innerHTML = "Price of F2: 6540000";
	}
	else if (model == "F3") {
		document.getElementById("price").innerHTML = "Price of F3: 7900000";
	}
	else if (model == "F1 Racer") {
		document.getElementById("price").innerHTML = "Price of F1 Racer: 12000000";
	}
	else if (model == "Camaro") {
		document.getElementById("price").innerHTML = "Price of Camaro: 1100000";
	}
	else if (model == "Sonic") {
		document.getElementById("price").innerHTML = "Price of Sonic: 940000";
	}
	else if (model == "Trailblazer") {
		document.getElementById("price").innerHTML = "Price of Trailblazer: 1400000";
	}
	else if (model == "Spark") {
		document.getElementById("price").innerHTML = "Price of Spark: 900000";
	}
	else if (model == "Suburban") {
		document.getElementById("price").innerHTML = "Price of Suburban: 2000000";
	}
	else if (model == "Fiesta") {
		document.getElementById("price").innerHTML = "Price of Fiesta: 1200000";
	}
	else if (model == "Mustang") {
		document.getElementById("price").innerHTML = "Price of F3: 3540000";
	}
	else if (model == "Ranger") {
		document.getElementById("price").innerHTML = "Price of F3: 1700000";
	}
}

function viewCart() {
	document.getElementById("three").style.visibility = "visible";
}