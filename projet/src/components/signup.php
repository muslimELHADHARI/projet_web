<?php
include 'db.php';

$name = $_POST['name'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO user (name, password) VALUES ('$name', '$password')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $conn->error]);
}

$conn->close();
?>
