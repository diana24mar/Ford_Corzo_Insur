<?php

	if (isset($_POST['sendData'])) {
		$var = $_POST['sendData'];
		$split = explode(";", $var);
		echo "Se envio"." ".$split[0];

		// Create connection to Oracle
		$conn = oci_pconnect("DIANA", "0392", "//localhost/XE");
		if (!$conn) {
			$m = oci_error();
		    echo $m['message'], "\n";
		    exit;
		}
		else {
			$sql1 = "INSERT INTO PRUEBA VALUES('".$split[0]."')";
			$result = oci_parse($conn, $sql1);
			oci_execute($result);
			echo "Se registro exitosamente.!";
		}
		// Close the Oracle connection
		oci_close($conn);
	} else {
		echo "No se ha recibido ningun valor.!";
	}
?>