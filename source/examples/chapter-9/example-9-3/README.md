# Example 9.3 — Set a preference cookie

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/form.html.

## Explanation

setcookie sends a response header. It does not immediately change the current request’s $_COOKIE array. The allowlist limits the accepted preference.

## Reference result

```text
Preference sent. Refresh to read it: (not received yet)
On a later request, the previously stored preference appears.
```

## Try this

Run on localhost, post theme=dark, and inspect the next request’s cookie.
