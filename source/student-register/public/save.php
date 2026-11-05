<?php
require dirname(__DIR__) . '/bootstrap.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Allow: POST'); http_response_code(405); exit('POST required.'); }
$token = $_POST['csrf'] ?? '';
if (!is_string($token) || !hash_equals($_SESSION['csrf'], $token)) { http_response_code(403); exit('Form expired or invalid. Return to the form and try again.'); }
$id = filter_var(input($_POST, 'id'), FILTER_VALIDATE_INT, ['options'=>['min_range'=>0]]);
if ($id === false) { http_response_code(422); exit('Invalid student id.'); }
$student = ['id'=>$id];
foreach (['roll_no','name','email','course'] as $key) { $student[$key] = input($_POST, $key); }
$errors = [];
if (!preg_match('/^[A-Za-z0-9-]{1,20}$/', $student['roll_no'])) { $errors[] = 'Roll number must contain 1–20 letters, digits or hyphens.'; }
if ($student['name'] === '' || strlen($student['name']) > 100) { $errors[] = 'Name is required and must be at most 100 bytes.'; }
if (strlen($student['email']) > 254 || !filter_var($student['email'], FILTER_VALIDATE_EMAIL)) { $errors[] = 'Enter a valid email address of at most 254 bytes.'; }
if ($student['course'] === '' || strlen($student['course']) > 40) { $errors[] = 'Course is required and must be at most 40 bytes.'; }
if (!$errors) {
    try {
        $connection = db();
        if ($id > 0) {
            $check = $connection->prepare('SELECT id FROM students WHERE id = ?');
            $check->bind_param('i', $id); $check->execute();
            if (!$check->get_result()->fetch_assoc()) { http_response_code(404); exit('Student not found.'); }
            $statement = $connection->prepare('UPDATE students SET roll_no = ?, name = ?, email = ?, course = ? WHERE id = ?');
            $statement->bind_param('ssssi', $student['roll_no'], $student['name'], $student['email'], $student['course'], $id);
        } else {
            $statement = $connection->prepare('INSERT INTO students (roll_no, name, email, course) VALUES (?, ?, ?, ?)');
            $statement->bind_param('ssss', $student['roll_no'], $student['name'], $student['email'], $student['course']);
        }
        $statement->execute();
        $_SESSION['flash'] = $id ? 'Student details saved.' : 'Student added.';
        header('Location: index.php', true, 303); exit;
    } catch (mysqli_sql_exception $exception) {
        if ($exception->getCode() === 1062) { $errors[] = 'That roll number is already registered.'; }
        else { error_log($exception->getMessage()); http_response_code(503); $errors[] = 'Could not save this record. Please try again later.'; }
    }
}
if (http_response_code() !== 503) { http_response_code(422); }
headerPage($id ? 'Edit student' : 'Add student');
studentForm($student, $errors);
footerPage();
