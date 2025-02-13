<?php 
$pageTitle = "Registration Process";
include 'header.php';
?>
    <div class="max-w-md mx-auto">
        <h1 class="text-2xl font-semibold mb-4">Registration Process</h1>
        <p class="text-gray-700">
            <?php
                session_start();

                // In a real application, you would store user data in a database.
                // For this example, we'll just simulate the registration process.

                $role = $_POST['role'];
                $username = $_POST['username'];
                $email = $_POST['email'];
                $password = $_POST['password'];

                // Basic validation
                if (empty($username) || empty($email) || empty($password)) {
                    echo "All fields are required. <a href='" . ($role == 'admin' ? 'admin_register.php' : 'owner_register.php') . "'>Try again</a>";
                    exit;
                }

                // In a real application, you would hash the password before storing it.

                // For this example, we'll just store the data in a session.
                $_SESSION['new_user'] = [
                    'role' => $role,
                    'username' => $username,
                    'email' => $email,
                    'password' => $password // In real app, hash this!
                ];

                echo "Registration successful! <a href='login.php'>Login</a>";
            ?>
        </p>
    </div>
<?php
include 'footer.php'; 
?>
