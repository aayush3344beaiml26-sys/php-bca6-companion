# Example 9.4 — End a session and remove its cookie

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

Clearing $_SESSION, expiring the browser’s identifier cookie, and destroying session storage address different parts of logout.

## Reference result

```text
Session ended.
```

## Try this

Create a session on one local page, run this page, then revisit the protected page.
