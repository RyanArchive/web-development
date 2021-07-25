
function number() {
	var fnum = document.getElementById("firstNum").value;
	var snum = document.getElementById("secondNum").value;

	if (isNaN(fnum)) {
		document.getElementById("firstNum").value= "";
	}
	if (isNaN(snum)) {
		document.getElementById("secondNum").value= "";
	}
}

var histNum = 0;
var posiNum = 0;
var negaNum = 0;

function compute() {
	var fnum = document.getElementById("firstNum").value;
	var snum = document.getElementById("secondNum").value;
	var add = document.getElementById("add");
	var subtract = document.getElementById("subtract");
	var multiply = document.getElementById("multiply");
	var divide = document.getElementById("divide");
	var modulo = document.getElementById("modulo");
	var answer = 0;
	var history = document.getElementById("history").value;

	if (fnum != "" && snum != "" && (add.checked == true || subtract.checked == true || multiply.checked == true || divide.checked == true || modulo.checked == true)) {

		var table = document.getElementById("dataTable");
		var rows = table.insertRow(0);
		var cols1 = rows.insertCell(0);
		var cols2 = rows.insertCell(1);
		var cols3 = rows.insertCell(2);
		var cols4 = rows.insertCell(3);
		var cols5 = rows.insertCell(4);

		if (add.checked == true) {
			answer = +fnum + +snum;
			cols3.innerHTML = fnum + " + " + snum + " = " + answer;
			cols4.style.color = "red";
		}
		else if (subtract.checked == true) {
			answer = fnum - snum;
			cols3.innerHTML = fnum + " - " + snum + " = " + answer;
			cols4.style.color = "green";
		}
		else if (multiply.checked == true) {
			answer = fnum * snum;
			cols3.innerHTML = fnum + " * " + snum + " = " + answer;
			cols4.style.color = "blue";
		}
		else if (divide.checked == true) {
			answer = (fnum / snum).toFixed(2);
			cols3.innerHTML = fnum + " / " + snum + " = " + answer;
			cols4.style.color = "yellow";
		}
		else if (modulo.checked == true) {
			answer = fnum % snum;
			cols3.innerHTML = fnum + " % " + snum + " = " + answer;
		}

		cols1.innerHTML = fnum;
		cols2.innerHTML = snum;
		cols4.innerHTML = answer;

		if (answer >= 0) {
			cols5.innerHTML = "Positive";
			posiNum++;
		}
		else {
			cols5.innerHTML = "Negative";
			negaNum++;
		}

		rows.appendChild(cols1);
		rows.appendChild(cols2);
		rows.appendChild(cols3);
		rows.appendChild(cols4);
		rows.appendChild(cols5);
		table.appendChild(rows);

		histNum++;

		document.getElementById("history").innerHTML = "History count: " + histNum;
		document.getElementById("positive").innerHTML = "Positive: " + posiNum;
		document.getElementById("negative").innerHTML = "Negative: " + negaNum;
	}
	else {
		alert("Please input two numbers and choose one operation you would like to take place.");
	}
}