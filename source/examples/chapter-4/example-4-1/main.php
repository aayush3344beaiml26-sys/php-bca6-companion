<?php
function percentage(float $scored, float $maximum): float {
    if ($maximum <= 0) {
        throw new InvalidArgumentException('Maximum must be positive');
    }
    return $scored / $maximum * 100;
}
echo number_format(percentage(216, 300), 2) . '%';
