# Example 9.3 — Set a preference cookie

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/form.html.

## Explanation

Only POST sets the preference, so a later GET does not overwrite it. setcookie sends a response header and does not immediately change the current request’s $_COOKIE array. The browser returns the stored cookie with a later request. The allowlist limits accepted preferences.

## Reference result

```text
First POST on a fresh browser: Preference sent. Cookie received with this request: (not received yet)
Next GET: Cookie received with this request: dark (if dark was selected)
```

## Try this

Run on localhost, post theme=dark, and inspect the next request’s cookie.
