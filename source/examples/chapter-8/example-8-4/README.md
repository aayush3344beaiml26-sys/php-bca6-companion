# Example 8.4 — Bind an update value

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.
Start MySQL/MariaDB and import schema.sql first. Configure the host/user/password for your installation. Default credentials are for a private local teaching setup.

## Explanation

The s and i binding types represent string and integer. This focused query example uses fixed inputs; the downloadable student register adds real forms, validation and CSRF checks.

## Reference result

```text
Changed rows: 1 (or 0 when the stored value is already the same)
```

## Try this

Try a nonexistent id. Explain why zero changed rows does not automatically mean a query failed.
