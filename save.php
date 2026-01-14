<?php
// Receive raw text data from the Controller
$data = file_get_contents('php://input');

if ($data !== false) {
    // Write the data into signals.txt
    file_put_contents('signals.txt', $data);
    echo "Saved";
}
?>
