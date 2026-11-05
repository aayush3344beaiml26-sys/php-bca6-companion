<?php
session_start();
$_SESSION['student'] = 'Asha';
$_SESSION['course'] = 'BCA';
echo 'Student: ' . $_SESSION['student'] . "\n";
echo 'Course: ' . $_SESSION['course'];
session_write_close();
