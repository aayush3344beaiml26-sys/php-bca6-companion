<?php
class InvalidMarkException extends Exception {}
function validateMark(int $mark): void {
    if ($mark < 0 || $mark > 100) {
        throw new InvalidMarkException('Mark must be between 0 and 100');
    }
}
try {
    validateMark(120);
    echo 'Mark accepted';
} catch (InvalidMarkException $e) {
    echo $e->getMessage();
}
