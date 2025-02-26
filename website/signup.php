<!-- Demo test to connect with supabase -->
<?php include "db.php";

$db = $service->initializeDatabase("AdminLogins", "id");

$newEntry = [
    "username" => "jishan",
    "password" => "12345678",
    "orgname" => "some",
    "fullname" => "jishan"
];

try {
    $data = $db->insert($newEntry);
} catch (Exception $e) {
    echo $e->getMessage();
}
