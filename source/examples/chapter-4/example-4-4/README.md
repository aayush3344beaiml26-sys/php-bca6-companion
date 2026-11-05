# Example 4.4 — Load required definitions

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

require_once loads helpers.php once, avoiding a duplicate function declaration when the file is requested again.

## Reference result

```text
20
```

## Try this

Rename the required file and inspect the error. Explain why continuing without it would be unsafe.
