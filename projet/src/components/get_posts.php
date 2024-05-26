<?php
include 'db.php';

$sql = "SELECT p.*, u.name as author FROM posts p JOIN user u ON p.id_user = u.id_user";
$result = $conn->query($sql);

$posts = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
}

echo json_encode($posts);
$conn->close();
?>
