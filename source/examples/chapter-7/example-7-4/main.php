<?php
$f = $_FILES['photo'] ?? null;
if (!$f || $f['error'] !== UPLOAD_ERR_OK) {
    http_response_code(422); exit('Choose a valid upload.');
}
if ($f['size'] > 2 * 1024 * 1024) {
    http_response_code(422); exit('Maximum size is 2 MB.');
}
$mime = (new finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name']);
$types = ['image/jpeg' => 'jpg', 'image/png' => 'png'];
if (!isset($types[$mime])) {
    http_response_code(422); exit('Only JPEG and PNG are accepted.');
}
$folder = getenv('UPLOAD_DIR') ?: dirname(__DIR__) . '/private-uploads';
if (!is_dir($folder) && !mkdir($folder, 0700, true)) {
    http_response_code(500); exit('Storage unavailable.');
}
$path = $folder . '/' . bin2hex(random_bytes(16)) . '.' . $types[$mime];
if (!move_uploaded_file($f['tmp_name'], $path)) {
    http_response_code(500); exit('Could not save upload.');
}
echo 'Image uploaded.';
