<?php
$student = $_GET['name'] ?? 'Visitor';
$safe = htmlspecialchars($student, ENT_QUOTES, 'UTF-8');
echo "<h1>Welcome, $safe</h1>";
echo '<p>Your PHP practice starts here.</p>';
