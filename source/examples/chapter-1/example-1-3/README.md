# Example 1.3 — One template, two visitors

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

The online lab uses these request test values. For a local GET request, append a query string; for POST, use the supplied form or submit the fields with an HTTP client.

```json
{
  "get": {
    "name": "Asha"
  }
}
```

## Explanation

The same script generates a different greeting from the request data. Escaping prevents a name being interpreted as HTML.

## Reference result

```text
Welcome, Asha
Your PHP practice starts here.
```

## Try this

Change name in the request input to <b>Asha</b> and observe literal text.
