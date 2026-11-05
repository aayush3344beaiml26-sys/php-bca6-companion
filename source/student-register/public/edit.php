<?php
require dirname(__DIR__) . '/bootstrap.php';
$rawId = input($_GET, 'id');
$id = $rawId === '' ? 0 : filter_var($rawId, FILTER_VALIDATE_INT, ['options'=>['min_range'=>1]]);
if ($id === false) { http_response_code(422); exit('Invalid student id.'); }
$student = ['id'=>0, 'roll_no'=>'', 'name'=>'', 'email'=>'', 'course'=>'BCA'];
if ($id > 0) {
    $statement = db()->prepare('SELECT id, roll_no, name, email, course FROM students WHERE id = ?');
    $statement->bind_param('i', $id);
    $statement->execute();
    $student = $statement->get_result()->fetch_assoc();
    if (!$student) { http_response_code(404); exit('Student not found.'); }
}
headerPage($id ? 'Edit student' : 'Add student');
studentForm($student);
footerPage();
