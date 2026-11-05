<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $theme = $_POST['theme'] ?? '';
    if (!in_array($theme, ['light', 'dark'], true)) {
        http_response_code(422); exit('Invalid theme');
    }
    setcookie('theme', $theme, [
        'expires' => time() + 30 * 24 * 60 * 60,
        'path' => '/',
        'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    echo 'Preference sent. ';
}
echo 'Cookie received with this request: ';
echo htmlspecialchars($_COOKIE['theme'] ?? '(not received yet)', ENT_QUOTES, 'UTF-8');
