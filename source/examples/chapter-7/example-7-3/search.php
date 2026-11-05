<?php
$roll = $_GET['roll'] ?? '';
if (!is_string($roll) || !preg_match('/^[0-9]{1,10}$/', $roll)) {
    http_response_code(422); exit('Enter 1–10 digits.');
}
echo 'Roll number: ' . htmlspecialchars($roll, ENT_QUOTES, 'UTF-8');
