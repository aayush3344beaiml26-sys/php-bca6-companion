<?php
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: text/html; charset=UTF-8');
header("Content-Security-Policy: default-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");
header('X-Content-Type-Options: nosniff');
session_set_cookie_params([
    'httponly' => true,
    'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    'samesite' => 'Lax',
    'path' => '/',
]);
session_start();
$_SESSION['csrf'] ??= bin2hex(random_bytes(32));
function e(string $text): string { return htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); }
function csrf(): string { return '<input type="hidden" name="csrf" value="' . e($_SESSION['csrf']) . '">'; }
function input(array $source, string $key): string {
    $value = $source[$key] ?? '';
    return is_string($value) ? trim($value) : '';
}
function db(): mysqli {
    static $connection = null;
    if ($connection instanceof mysqli) { return $connection; }
    $config = require __DIR__ . '/config.php';
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    try {
        $connection = new mysqli($config['host'], $config['user'], $config['password'], $config['database']);
        $connection->set_charset('utf8mb4');
        return $connection;
    } catch (mysqli_sql_exception $exception) {
        error_log($exception->getMessage());
        http_response_code(503);
        exit('Database unavailable. Check config.php, import schema.sql, and start MySQL.');
    }
}
function headerPage(string $title): void {
    echo '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
    echo '<title>' . e($title) . ' · Student register</title><link rel="stylesheet" href="style.css">';
    echo '<header><a href="index.php">PHP / Student register</a><span>BCA Semester VI · Chapter 8</span></header><main><h1>' . e($title) . '</h1>';
    if (isset($_SESSION['flash'])) {
        echo '<p class="success" role="status">' . e($_SESSION['flash']) . '</p>';
        unset($_SESSION['flash']);
    }
}
function footerPage(): void { echo '<footer>Local teaching project · Add authentication and authorisation before shared deployment.</footer></main></html>'; }
function studentForm(array $student, array $errors = []): void {
    if ($errors) { echo '<div class="errors" role="alert"><ul>'; foreach ($errors as $error) { echo '<li>' . e($error) . '</li>'; } echo '</ul></div>'; }
    echo '<form method="post" action="save.php">' . csrf();
    echo '<input type="hidden" name="id" value="' . e((string)($student['id'] ?? 0)) . '">';
    foreach (['roll_no'=>'Roll number', 'name'=>'Student name', 'email'=>'Email address', 'course'=>'Course'] as $key=>$label) {
        $max = ['roll_no'=>20,'name'=>100,'email'=>254,'course'=>40][$key];
        echo '<label for="' . $key . '">' . $label . '</label><input id="' . $key . '" name="' . $key . '" type="' . ($key === 'email' ? 'email' : 'text') . '" maxlength="' . $max . '" required value="' . e((string)($student[$key] ?? '')) . '">';
    }
    echo '<button type="submit">Save student</button> <a href="index.php">Cancel</a></form>';
}
