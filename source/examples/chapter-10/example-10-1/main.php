<?php
function divide(float $a, float $b): float {
    if ($b == 0.0) {
        throw new InvalidArgumentException('Divisor must not be zero');
    }
    return $a / $b;
}
try {
    echo divide(18, 0);
} catch (InvalidArgumentException $e) {
    echo $e->getMessage() . "\n";
} finally {
    echo 'Calculation finished.';
}
