# Example 10.4 — Recover from a database outage

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.
Start MySQL/MariaDB and import schema.sql first. Configure the host/user/password for your installation. Default credentials are for a private local teaching setup.

## Explanation

mysqli_report enables exception-based MySQLi failures. The catch keeps raw connection details out of the response. The same script shows success when the database is available.

## Reference result

```text
Database unavailable. Check the local setup. (when connection fails)
```

## Try this

Test both a stopped database service and a valid connection. Inspect the PHP error log.
