<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
    $db = new mysqli(
        getenv('DB_HOST') ?: '127.0.0.1',
        getenv('DB_USER') ?: 'root',
        getenv('DB_PASS') ?: '',
        'php_companion'
    );
    $db->set_charset('utf8mb4');
    echo 'Database connected.';
    $db->close();
} catch (mysqli_sql_exception $e) {
    error_log($e->getMessage());
    http_response_code(503);
    echo 'Database unavailable. Check the local setup.';
}
