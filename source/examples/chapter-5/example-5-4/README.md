# Example 5.4 — Preserve keys while sorting

For PHP/HTML examples, serve this folder using PHP 8.3: `php -S localhost:8000`. Visit http://localhost:8000/main.php.

## Explanation

arsort sorts values descending while retaining names as keys. A strict false check preserves a valid match at index 0.

## Reference result

```text
Meera: 91
Asha: 84
Ravi: 76
Found at 0
```

## Try this

Sort by student name instead, using ksort.
