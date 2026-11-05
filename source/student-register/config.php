<?php
// Local teaching defaults. Use a dedicated restricted database user for shared deployments.
return [
    'host' => getenv('DB_HOST') ?: '127.0.0.1',
    'user' => getenv('DB_USER') ?: 'root',
    'password' => getenv('DB_PASS') ?: '',
    'database' => getenv('DB_NAME') ?: 'php_companion',
];
