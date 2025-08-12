<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel = "stylesheet" href = "style.css">
</head>
<body>
    <header class = "header">
        <nav class = "navbar">
            <a href = "#">Home</a>
            <a href = "#">About</a>
            <a href = "#">Services</a>
            <a href = "#">Contact</a>
            <a href="logout.php">Logout</a>
        </nav>
    </header>
    <div class = "background"></div>
    <div class = "container">
        <div class ="content">
            <h1><li><a href="Video.html">Video Tutorials</a></li></h1>
            <h1><li><a href="Notes.html">Notes</a></li></h1>
            <h1><li><a href="Quizzes.html">Quizzes</a></li></h1>
        </div>
    </div>
    <script src="track.js"></script>
</body>
</html>
