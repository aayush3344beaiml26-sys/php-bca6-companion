# Student register — Chapter 8 local project

PHP 8.3 + MySQL 8 or MariaDB. Requires MySQLi/mysqlnd and sessions (standard XAMPP packages include these).

1. Start MySQL/MariaDB. Import schema.sql with phpMyAdmin or a MySQL client.
2. Set database connection details in config.php, or use DB_HOST, DB_USER, DB_PASS and DB_NAME environment variables. The default local configuration uses root with an empty password; use this only on a private local installation. Create a restricted database user for any shared deployment.
3. From this project folder run `php -S localhost:8000 -t public` and open http://localhost:8000/ . With XAMPP, place the folder under htdocs and visit http://localhost/student-register/public/ .
4. Add a student, search by name or roll number, and edit a record. Refresh after saving: the redirect prevents accidental resubmission.

The SQL script can be imported again without duplicating its two sample roll numbers. It does not overwrite edits to those existing rows.

## What to inspect

- Prepared INSERT, UPDATE and search statements separate values from SQL structure.
- Server-side validation checks every field. Limits use bytes, so multi-byte names reach them sooner than ASCII names; this is documented rather than silently assuming one byte per character.
- All displayed values are HTML-encoded. A name containing `<b>` displays literally.
- Session tokens protect POST submissions against CSRF. GET never changes a student record.
- Duplicate roll numbers get a useful form error. Raw database errors are logged privately.
- Database credentials and helper code sit outside the public/ document root when served with the recommended command.

## Manual checks

Add a valid student; submit a duplicate roll; use an invalid email; enter an apostrophe and HTML-like text in a name; search for no matches; edit an existing record; request an unknown id; remove the CSRF token; request save.php with GET; stop MySQL and inspect the controlled failure.

This is a local teaching project. It has no login or per-user authorisation. Add those controls, TLS, operational logging and deployment-specific configuration before exposing it as a shared application.
