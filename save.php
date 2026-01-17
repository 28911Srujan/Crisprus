<?php
// Enable error reporting so we can see what's wrong
error_reporting(E_ALL);
ini_set('display_errors', 1);

$data = file_get_contents('php://input');
$file = 'server.txt';

if (!$data) {
    die("Error: No data received from index.html");
}

// 1. Check if we can write to this folder
if (!is_writable('.')) {
    die("Error: The folder is READ-ONLY. Please change folder permissions to 775 or 777.");
}

// 2. Try to save the file
$status = file_put_contents($file, $data, LOCK_EX);

if ($status === false) {
    die("Error: Could not write to $file. Check if the file is locked by another program.");
} else {
    echo "Success! Saved " . strlen($data) . " bytes to $file";
}
?>
