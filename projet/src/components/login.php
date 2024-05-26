<?php

echo "lol";
include 'db.php';
$name = $_POST['name'];
$password = $_POST['password'];
echo "bruuh";
$sql = "SELECT * FROM user WHERE name='$name'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo json_encode(["message" => "Login successful", "user_id" => $row['id_user']]);
    } else {
        echo json_encode(["error" => "Invalid password"]);
    }
} else {
    echo json_encode(["error" => "No user found"]);
}

$conn->close();
?>
