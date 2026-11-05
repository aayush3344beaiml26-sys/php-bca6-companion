# Example 10.2 — A custom exception

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

The application-specific type identifies a particular validation failure while inheriting the standard exception behaviour.

## Reference result

```text
Mark must be between 0 and 100
```

## Try this

Test -1, 0, 100 and 101.
