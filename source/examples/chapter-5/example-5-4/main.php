<?php
$marks = ['Asha' => 84, 'Ravi' => 76, 'Meera' => 91];
arsort($marks);
foreach ($marks as $name => $mark) {
    echo "$name: $mark\n";
}
$names = ['Asha', 'Ravi'];
$position = array_search('Asha', $names, true);
echo $position !== false ? "Found at $position" : 'Not found';
