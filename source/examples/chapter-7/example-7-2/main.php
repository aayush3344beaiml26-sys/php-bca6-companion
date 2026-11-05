<?php
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$name = is_string($name) ? trim($name) : '';
$email = is_string($email) ? trim($email) : '';
$errors = [];
if ($name === '') { $errors[] = 'Name is required.'; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Enter a valid email address.';
}
if ($errors) {
    echo implode("\n", $errors);
} else {
    echo 'Registered: ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
}
