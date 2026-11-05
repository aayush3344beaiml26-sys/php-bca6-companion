<?php
$subjects = ['PHP', 'DBMS'];
$student = ['name' => 'Asha', 'marks' => 84];
$rows = [
    ['name' => 'Asha', 'marks' => 84],
    ['name' => 'Ravi', 'marks' => 76]
];
echo $subjects[0] . "\n";
echo $student['name'] . "\n";
foreach ($rows as $row) {
    echo $row['name'] . ': ' . $row['marks'] . "\n";
}
