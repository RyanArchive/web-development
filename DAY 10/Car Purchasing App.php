<?php

	if (isset($_POST['addToCart'])) {
		require('connection.php');

		$itmN = rand(10000, 99999);
		$brnd = $_POST['brand'];
		$mdl = $_POST['model'];
		$cl = $_POST['color'];
		$qty = $_POST['quantity'];
		$sls;

		if ($mdl == "X3") {
			$sls = 1300000 * $qty;
		}
		else if ($mdl == "X4") {
			$sls = 1440000 * $qty;
		}
		else if ($mdl == "X5") {
			$sls = 1800000 * $qty;
		}
		else if ($mdl == "X6") {
			$sls = 2100000 * $qty;
		}
		else if ($mdl == "F1") {
			$sls = 2500000 * $qty;
		}
		else if ($mdl == "F2") {
			$sls = 6540000 * $qty;
		}
		else if ($mdl == "F3") {
			$sls = 7900000 * $qty;
		}
		else if ($mdl == "F1 Racer") {
			$sls = 12000000 * $qty;
		}
		else if ($mdl == "Camaro") {
			$sls = 1100000 * $qty;
		}
		else if ($mdl == "Sonic") {
			$sls = 940000 * $qty;
		}
		else if ($mdl == "Trailblazer") {
			$sls = 1400000 * $qty;
		}
		else if ($mdl == "Spark") {
			$sls = 900000 * $qty;
		}
		else if ($mdl == "Suburban") {
			$sls = 2000000 * $qty;
		}
		else if ($mdl == "Fiesta") {
			$sls = 1200000 * $qty;
		}
		else if ($mdl == "Mustang") {
			$sls = 3540000 * $qty;
		}
		else if ($mdl == "Ranger") {
			$sls = 1700000 * $qty;
		}

		$sqlSave = "INSERT INTO sales(itemno, brand, model, color, quantity, revenue) VALUES($itmN, '$brnd', '$mdl', '$cl', $qty, $sls)";
		mysqli_query($link, $sqlSave);
		echo "<script>alert('Data has been saved.')</script>";
	}

?>

<html>

<head>
	<title>Car Purchasing App</title>
	<link rel="stylesheet" type="text/css" href="design.css">
</head>

<body onload="populate()">

	<form method="post"	action="Car Purchasing App.php">
		<table id="tblCarpa" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td id="title" colspan="4">CAR PURCHASING APP (CARPA)</td>
			</tr>
			<tr>
				<td id="one" rowspan="7">
					BRANDS: <br><br>
					BMW
					<ul>
						Models - Price
						<li>X3 - 1300000</li>
						<li>X4 - 1440000</li>
						<li>X5 - 1800000</li>
						<li>X6 - 2100000</li>
					</ul>
					FERRARI
					<ul>
						Models - Price
						<li>F1 - 2500000</li>
						<li>F2 - 6540000</li>
						<li>F3 - 7900000</li>
						<li>F1 Racer - 12000000</li>
					</ul>
					CHEVROLET
					<ul>
						Models - Price
						<li>Camaro - 1100000</li>
						<li>Sonic - 940000</li>
						<li>Trailblazer - 1400000</li>
						<li>Spark - 900000</li>
						<li>Suburban - 2000000</li>
					</ul>
					</ul>
					FORD
					<ul>
						Models - Price
						<li>Fiesta - 1200000</li>
						<li>Mustang - 3540000</li>
						<li>Ranger - 1700000</li>
					</ul>
				</td>
				<td class="two1">Select Car Brand:</td>
				<td class="two2">
					<select class="selects" id="brand" name="brand" onclick="models()"></select>
				</td>
				<td id="three" rowspan="7">
					<table border="0" id="items" cellpadding="0" cellspacing="0" name="items">
						<tr> 
							<td align=left colspan=2 id="upDate"></td>
							<td></td>
							<td></td>
							<td align="right">
								<a href="Car Purchasing App.php" id="close">Close X</a>
							</td> 
						</tr>
						<tr> 
							<td><b>Item #</b></td>
							<td><b>Brand</b></td>
							<td><b>Model</b></td>
							<td><b>Quantity</b></td>
							<td><b>Price (Php)</b></td> 
						</tr>

						<?php

							require('connection.php');

							$sqlSee = "SELECT itemno, brand, model, color, quantity, revenue FROM sales";
							$result = mysqli_query($link, $sqlSee);

							while ($row = mysqli_fetch_array($result)) {
								echo "<tr>";
								echo "<td>" . $row["itemno"] . "</td>";
								echo "<td>" . $row["brand"] . "</td>";
								echo "<td>" . $row["model"] . " - " . $row["color"] . "</td>";
								echo "<td>" . $row["quantity"] . "</td>";
								echo "<td>" . $row["revenue"] . "</td>";
								echo "</tr>";
							}

						?>

					</table>
					<p>&nbsp;</p>
					<table border="0" id="summary" cellpadding="0" cellspacing="10">
						<tr> 
							<td align="right"><b>Summary of Sales</b></td>
							<td align="left">In Pesos (Php)</td>
						</tr>

						<?php

							require('connection.php');

							$sqlSee = "SELECT BRAND, SUM(REVENUE) FROM sales GROUP BY BRAND";
							$result = mysqli_query($link, $sqlSee);


							while ($row = mysqli_fetch_array($result)) {
								echo "<tr>";
									echo "<td align=right>" . $row['BRAND'] . " Sales</td>";
									echo "<td align=left id=bmwSales>" . $row['SUM(REVENUE)'] . "</td>";
								echo "</tr>";
							}

						?>

						<tr> 
							<td colspan="2" style="height: 40px">
						</tr>

						<?php

							require('connection.php');

							$sqlSee = "SELECT SUM(REVENUE) FROM sales";
							$result = mysqli_query($link, $sqlSee);

							while ($row = mysqli_fetch_array($result)) {
								echo "<tr>";
									echo "<td align=right><b>Total Sales</b> Php</td>";
									echo "<td align=left id=totalSales>" . $row['SUM(REVENUE)'] . "</td>";
								echo "</tr>
								<tr>";
									echo "<td align=right><b>Tax Included (12%)</b> Php</td>";
									echo "<td align=left id=tax>" . $row['SUM(REVENUE)'] * 0.12 . "</td>";
								echo "</tr>
								<tr>";
									echo "<td align=right><b>Grand Total</b> Php</td>";
									echo "<td align=left id=grandTotal>" . ($row['SUM(REVENUE)'] + ($row['SUM(REVENUE)'] * 0.12)) . "</td>";
								echo "</tr>";
							}
							
						?>
						
						<td align="center" class="height70" colspan="2">
							<input class="button1" type="submit" value="Pay with Cash"> &nbsp;
							<input class="button1" type="submit" value="Pay with Credit">
						</td>
					</table>
				</td>
			</tr>
			<tr>
				<td class="two1">Select Car Model:</td>
				<td>
					<select class="selects" id="model" name="model" onclick="prices()"></select> <br>
					<b><font id="price"></font></b>
				</td>
			</tr>
			<tr>
				<td class="two1">Quantity:</td>
				<td>
					<select class="selects" id="quantity" name="quantity"></select>
				</td>
			</tr>
			<tr>
				<td class="two1">Color:</td>
				<td>
					<select class="selects" id="color" name="color"></select>
				</td>
			</tr>
			<tr>
				<td align="center" class="height70" colspan="2">
					<input class="button1" name="addToCart" onclick="addToCart()" type="submit" value="Add to Cart"> &nbsp;
					<input class="button1" onclick="viewCart()" type="button" value="View Cart">
				</td>
			</tr>
			<tr>
				<td align="center" class="height70" colspan="2">
					<b><u>Add to Cart</u> must be adding the purchas in the list. <br>
					<b><u>View Cart</u> will display the list when clicked. <br>
					List is not displayed when adding to cart.</b>
				</td>
			</tr>
			<tr>
				<td colspan="2"></td>
			</tr>
		</table>
	</form>
	
	<script src="function.js"></script>

</body>

</html>