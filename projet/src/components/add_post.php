<?php
include 'db.php';

$name = $_POST['name'];
$category = $_POST['category'];
$desc = $_POST['desc'];
$image = $_POST['image'];
$id_user = $_POST['id_user'];

$sql = "INSERT INTO posts (name, category, descr, image, id_user) VALUES ('$name', '$category', '$desc', '$image', '$id_user')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Post added successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $conn->error]);
}

$conn->close();
?>
