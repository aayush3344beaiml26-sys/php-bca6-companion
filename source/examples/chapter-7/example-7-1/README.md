# Example 7.1 — Read a GET search

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

The online lab uses these request test values. For a local GET request, append a query string; for POST, use the supplied form or submit the fields with an HTTP client.

```json
{
  "get": {
    "q": "PHP arrays"
  }
}
```

## Explanation

The missing-value default prevents an undefined-key warning. The type check rejects an unexpected array value. Escaping makes the output safe for HTML.

## Reference result

```text
Searching for: PHP arrays
```

## Try this

Try an empty q, then <script>alert(1)</script>.
