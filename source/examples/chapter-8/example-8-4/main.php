<?php
require __DIR__ . '/db.php';
$id = 1;
$email = 'asha.new@example.com';
if ($id < 1 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit('Invalid input');
}
$stmt = $db->prepare('UPDATE students SET email = ? WHERE id = ?');
$stmt->bind_param('si', $email, $id);
$stmt->execute();
echo 'Changed rows: ' . $stmt->affected_rows;
$stmt->close();
$db->close();
