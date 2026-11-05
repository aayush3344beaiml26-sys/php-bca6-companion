<?php
for ($i = 1; $i <= 9; $i++) {
    if ($i === 3) { continue; }
    if ($i === 6) { break; }
    echo "$i ";
}
echo "\n";
$count = 0;
do {
    echo "do-while runs once";
} while ($count > 0);
