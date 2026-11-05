<?php
function largest(array $values): int|float {
    if ($values === []) {
        throw new InvalidArgumentException('Array must not be empty');
    }
    $best = $values[array_key_first($values)];
    foreach ($values as $value) {
        if ($value > $best) { $best = $value; }
    }
    return $best;
}
echo largest([-12, -3, -27, -8]);
