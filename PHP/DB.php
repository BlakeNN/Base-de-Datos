<?php
	$conn = mysqli_connect("localhost","root","","login");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

// Obtener los valores enviados por el formulario
if(isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['edad'])) {
$nombre = $_POST ['nombre'];
$email = $_POST['email'];
$edad = $_POST['edad'];
}

// Crear la consulta SQL para insertar los datos en la tabla
$sql = "INSERT INTO login1 (Nombre, Email, Edad) VALUES ('$nombre', '$email', '$edad')";


// Ejecutar la consulta
if (mysqli_query($conn, $sql)) {
    echo "Datos insertados correctamente";
} else {
    echo "Error al insertar los datos: " . mysqli_error($conn);
}

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>

