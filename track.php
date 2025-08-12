<?php
session_start();
require "db.php";

if (!isset($_SESSION["user_id"])) {
    http_response_code(403);
    echo json_encode(["error" => "Not logged in"]);
    exit;
}

$user_id    = $_SESSION["user_id"];
$action     = $_POST["action"] ?? "";
$page_url   = $_POST["page_url"] ?? "";
$extra_data = $_POST["extra_data"] ?? "";

if ($action && $page_url) {
    $stmt = $conn->prepare("INSERT INTO user_activity (user_id, action_type, page_url, extra_data) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isss", $user_id, $action, $page_url, $extra_data);
    $stmt->execute();
    $stmt->close();

    echo json_encode(["status" => "ok"]);
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing parameters"]);
}

$conn->close();
?>
