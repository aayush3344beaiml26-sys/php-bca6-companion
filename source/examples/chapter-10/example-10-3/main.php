<?php
try {
    $mode = 'range';
    if ($mode === 'range') {
        throw new OutOfRangeException('Record number is out of range');
    }
    throw new RuntimeException('Operation failed');
} catch (OutOfRangeException $e) {
    echo 'Range: ' . $e->getMessage();
} catch (RuntimeException $e) {
    echo 'Runtime: ' . $e->getMessage();
} catch (Throwable $e) {
    echo 'Unexpected failure';
}
