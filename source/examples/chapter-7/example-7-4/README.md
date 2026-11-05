# Example 7.4 — Validate an uploaded image

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/form.html.

## Explanation

This needs a real multipart HTTP upload. Download the handler and form together. The generated filename avoids trusting a user-supplied path.

## Reference result

```text
Image uploaded. (after a valid JPEG or PNG submission)
```

## Try this

Test a text file renamed .jpg and an image larger than 2 MB.
