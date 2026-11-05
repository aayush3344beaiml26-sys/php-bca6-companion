# Example 9.2 — Encode and decode session data

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

session_encode uses the configured session serialisation format; session_decode restores it into the active session. This is not encryption.

## Reference result

```text
Asha: 3
```

## Try this

Add a cart array, encode it, and inspect the restored value using print_r.
