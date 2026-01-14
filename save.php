<?php
// Receive the data from the controller
$data = file_get_contents('php://input');

if ($data) {
    // Write the data to signals.txt
    file_put_contents('signals.txt', $data);
    echo "Successfully saved to signals.txt";
} else {
    echo "No data received";
}
?>
