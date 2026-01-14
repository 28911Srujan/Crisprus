<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Server Signals</title>
    <meta http-equiv="refresh" content="5">
    <style>
        body { margin: 0; padding: 10px; font-family: monospace; }
        p { margin: 0; padding: 0; line-height: 1.2; }
    </style>
</head>
<body>
    <?php
    $filename = 'signals.txt';
    if (file_exists($filename)) {
        $content = file($filename);
        foreach ($content as $line) {
            echo "<p>" . htmlspecialchars(trim($line)) . "</p>";
        }
    } else {
        echo "<p>No signals found.</p>";
    }
    ?>
</body>
</html>
