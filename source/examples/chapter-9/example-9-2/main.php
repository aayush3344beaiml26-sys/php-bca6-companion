<?php
session_start();
$_SESSION = ['student' => 'Asha', 'visits' => 3];
$encoded = session_encode();
$_SESSION = [];
session_decode($encoded);
echo $_SESSION['student'] . ': ' . $_SESSION['visits'];
session_write_close();
