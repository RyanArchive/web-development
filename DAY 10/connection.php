<?php

	$link = mysqli_connect("localhost", "root", "");

	if($link) {
		mysqli_select_db($link, "purchasing");
	}
	else {
		//die("Connection failed.".mysqli_connect_error());
		echo '<script>';
		echo 'alert("Connection Failed."); </script>';
	}

?>