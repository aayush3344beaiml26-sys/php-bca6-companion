<?php
require __DIR__ . '/db.php';
$result = $db->query('SELECT roll_no, name, course FROM students ORDER BY id');
function e(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}
echo '<table><tr><th>Roll</th><th>Name</th><th>Course</th></tr>';
while ($row = $result->fetch_assoc()) {
    echo '<tr><td>' . e($row['roll_no']) . '</td><td>'
       . e($row['name']) . '</td><td>' . e($row['course']) . '</td></tr>';
}
echo '</table>';
$db->close();
