# Example 7.2 — Validate a POST registration

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/form.html.

The online lab uses these request test values. For a local GET request, append a query string; for POST, use the supplied form or submit the fields with an HTTP client.

```json
{
  "post": {
    "name": "Asha",
    "email": "asha@example.com"
  }
}
```

## Explanation

Server-side validation rejects empty names and malformed emails independently of the browser form.

## Reference result

```text
Registered: Asha
```

## Try this

Clear the name and set email to "asha@". Read both error messages.
