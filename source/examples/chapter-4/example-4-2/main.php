<?php
$label = 'Outside';
function greet(string $name, string $course = 'BCA'): string {
    $label = 'Welcome';
    return "$label, $name — $course";
}
echo greet('Asha') . "\n";
echo $label;
