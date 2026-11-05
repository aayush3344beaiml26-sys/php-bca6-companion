# Example 10.3 — Choose the matching catch

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

PHP selects the first compatible catch. A broad Throwable catch belongs after catches for expected specific failures.

## Reference result

```text
Range: Record number is out of range
```

## Try this

Change mode to "runtime" and compare the selected catch.
