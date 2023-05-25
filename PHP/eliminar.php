<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Establecer la conexión con la base de datos
$servername = "localhost";
$username = "root";
$dbname = "login";

$conn = new mysqli("localhost", "root", "", "login");

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
$ID = $_POST['ID'];

$sql = "DELETE FROM login1 WHERE ID = $ID";
if (mysqli_query($conn, $sql)) {
    // Redirigir a una página después de eliminar el registro
    header("Location: http://localhost:3000/del");
    exit();
} else {
    echo "Error al eliminar el registro: " . mysqli_error($conn);
}
if (mysqli_query($conn, $sql)) {
    echo "Registro eliminado correctamente.";
} else {
    echo "Error al eliminar el registro: " . mysqli_error($conn);
}
?>