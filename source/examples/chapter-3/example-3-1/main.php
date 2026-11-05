<?php
$n = 14;
echo $n % 2 === 0 ? "Even\n" : "Odd\n";
$a = 12; $b = 29; $c = 29;
if ($a >= $b) {
    $largest = $a >= $c ? $a : $c;
} else {
    $largest = $b >= $c ? $b : $c;
}
echo "Greatest: $largest";
