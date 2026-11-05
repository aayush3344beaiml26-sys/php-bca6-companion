# Example 10.1 — Throw, catch and finally

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

The thrown exception skips the remaining try statements. The matching catch handles it and finally completes the common cleanup path.

## Reference result

```text
Divisor must not be zero
Calculation finished.
```

## Try this

Change the divisor to 3 and predict both output lines.
