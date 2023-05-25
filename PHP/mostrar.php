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

// Ejecutar una consulta para obtener los datos
$sql = "SELECT * FROM login1";
$result = $conn->query($sql);

// Mostrar los datos
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            "ID" => $row["ID"],
            "Nombre" => $row["Nombre"],
            "Edad" => $row["Edad"],
            "Email" => $row["Email"]
        );
    }
} else {
    echo "No se encontraron datos.";
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['ID'])) {
    $ID = $_POST['ID'];
    $Nombre = $_POST['Nombre'];
    $Edad = $_POST['Edad'];
    $Email = $_POST['Email'];

    // Actualizar los datos en la base de datos
    $sql = "UPDATE login1 SET Nombre='$Nombre', Edad='$Edad', Email='$Email' WHERE ID='$ID'";

    if (mysqli_query($conn, $sql)) {
        // La actualización fue exitosa
        $response = [
            'status' => 'success',
            'message' => 'Datos actualizados correctamente'
        ];
    } else {
        // Ocurrió un error al actualizar los datos
        $response = [
            'status' => 'error',
            'message' => 'Error al actualizar los datos: ' . mysqli_error($conn)
        ];
    }

    // Devolver la respuesta como JSON
    header('Content-Type: application/json');
    echo json_encode($response);
}

header('Content-Type: application/json');
echo json_encode($data);
?>
