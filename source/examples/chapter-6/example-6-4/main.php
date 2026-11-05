<?php
$text = 'PHP powers dynamic pages';
$position = strpos($text, 'PHP');
echo $position !== false ? "Found at $position\n" : "Not found\n";
echo str_replace('dynamic', 'personalised', $text) . "\n";
echo implode(' | ', explode(' ', 'PHP SQL HTML'));
