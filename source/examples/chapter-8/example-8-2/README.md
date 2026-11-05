# Example 8.2 — Create the practice database

Import schema.sql in phpMyAdmin or a MySQL client with permission to create the practice database.
Start MySQL/MariaDB and import schema.sql first. Configure the host/user/password for your installation. Default credentials are for a private local teaching setup.

## Explanation

Run the SQL once in phpMyAdmin or a MySQL client. The unique roll number rejects duplicate registrations.

## Reference result

```text
Database php_companion with a students table and two sample rows.
```

## Try this

Run SELECT id, roll_no, name FROM students ORDER BY id; after import.
