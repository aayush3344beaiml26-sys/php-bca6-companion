# Example 1.4 — Inspect the execution environment

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

PHP_VERSION, PHP_SAPI and __FILE__ describe the execution environment. A browser runtime is different from Apache on localhost.

## Reference result

```text
PHP major version: 8
Execution interface: varies by runtime
Document: varies by runtime
```

## Try this

Download this file, run it on localhost, and compare the interface and path.
