CREATE DATABASE IF NOT EXISTS php_companion
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE php_companion;
CREATE TABLE IF NOT EXISTS students (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  roll_no VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  course VARCHAR(40) NOT NULL DEFAULT 'BCA'
);
INSERT INTO students (roll_no, name, email, course) VALUES
('BCA601', 'Asha Sharma', 'asha@example.com', 'BCA'),
('BCA602', 'Ravi Kumar', 'ravi@example.com', 'BCA');
