<?php
$query = $_GET['q'] ?? '';
if (!is_string($query)) { $query = ''; }
$query = trim($query);
echo $query === ''
    ? '<p>Enter a search term.</p>'
    : '<p>Searching for: ' . htmlspecialchars($query, ENT_QUOTES, 'UTF-8') . '</p>';
