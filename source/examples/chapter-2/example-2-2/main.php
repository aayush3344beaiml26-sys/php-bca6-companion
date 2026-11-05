<?php
const COURSE = 'BCA';
$semester = 6;
$fee = 1250.50;
$paid = true;
echo COURSE . " Semester $semester\n";
echo gettype($semester) . ', ' . gettype($fee) . ', ' . gettype($paid);
