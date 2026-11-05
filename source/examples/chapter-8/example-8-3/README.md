# Example 8.3 — Fetch and safely display rows

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.
Start MySQL/MariaDB and import schema.sql first. Configure the host/user/password for your installation. Default credentials are for a private local teaching setup.

## Explanation

fetch_assoc returns a row keyed by column names, or null when no row remains. Every database value is encoded for HTML output.

## Reference result

```text
Roll     Name          Course
BCA601   Asha Sharma   BCA
BCA602   Ravi Kumar    BCA
```

## Try this

Add a student whose name contains an apostrophe and verify its display.
