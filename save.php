<?php
// Receive raw text data from the Controller (index.html)
$data = file_get_contents('php://input');

if ($data) {
    // Write the data into server.txt
    // LOCK_EX prevents multiple users from writing at the exact same time
    $success = file_put_contents('server.txt', $data, LOCK_EX);
    
    if ($success !== false) {
        echo "Successfully updated server.txt";
    } else {
        header('HTTP/1.1 500 Internal Server Error');
        echo "Error: Permissions issue. Cannot write to server.txt";
    }
} else {
    echo "No data received.";
}
?>
