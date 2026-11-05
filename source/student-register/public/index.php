<?php
require dirname(__DIR__) . '/bootstrap.php';
$search = input($_GET, 'q');
if (strlen($search) > 100) { http_response_code(422); exit('Search must be at most 100 bytes.'); }
$connection = db();
if ($search !== '') {
    $term = '%' . $search . '%';
    $statement = $connection->prepare('SELECT id, roll_no, name, email, course FROM students WHERE name LIKE ? OR roll_no LIKE ? ORDER BY id');
    $statement->bind_param('ss', $term, $term);
    $statement->execute();
    $result = $statement->get_result();
} else {
    $result = $connection->query('SELECT id, roll_no, name, email, course FROM students ORDER BY id');
}
headerPage('Student register');
?>
<p class="lead">Add a student, find a record, or update existing details.</p>
<form method="get" class="search"><label for="q">Search name or roll number</label><input id="q" name="q" maxlength="100" value="<?=e($search)?>"><button>Search</button><a href="index.php">Show all</a></form>
<p><a class="button" href="edit.php">Add a student +</a></p>
<div class="table-wrap"><table><thead><tr><th>Roll number</th><th>Name</th><th>Email</th><th>Course</th><th>Action</th></tr></thead><tbody>
<?php while ($student = $result->fetch_assoc()): ?>
<tr><td><?=e($student['roll_no'])?></td><td><?=e($student['name'])?></td><td><?=e($student['email'])?></td><td><?=e($student['course'])?></td><td><a href="edit.php?id=<?=e((string)$student['id'])?>">Edit<span class="sr-only"> <?=e($student['name'])?></span></a></td></tr>
<?php endwhile; ?>
<?php if ($result->num_rows === 0): ?><tr><td colspan="5">No matching students.</td></tr><?php endif; ?>
</tbody></table></div>
<?php footerPage(); ?>
