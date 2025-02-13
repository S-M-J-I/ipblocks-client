<?php 
$pageTitle = "Login Process";
include 'header.php';
?>
    <div class="max-w-md mx-auto">
        <h1 class="text-2xl font-semibold mb-4">Login Process</h1>
        <p class="text-gray-700">
            <?php
                session_start();

                // Dummy user data (replace with database interaction later)
                $users = [
                    'admin' => ['username' => 'admin', 'password' => 'password', 'role' => 'admin'],
                    'owner' => ['username' => 'owner', 'password' => 'password', 'role' => 'owner']
                ];

                $username = $_POST['username'];
                $password = $_POST['password'];

                foreach ($users as $user) {
                    if ($user['username'] == $username && $user['password'] == $password) {
                        $_SESSION['username'] = $username;
                        $_SESSION['role'] = $user['role'];

                        if ($user['role'] == 'admin') {
                            header("Location: admin_dashboard.php");
                            exit();
                        } elseif ($user['role'] == 'owner') {
                            header("Location: owner_dashboard.php");
                            exit();
                        }
                    }
                }

                // If login fails
                echo "Invalid username or password. <a href='login.php'>Try again</a>";
            ?>
        </p>
    </div>
<?php
include 'footer.php'; 
?>
