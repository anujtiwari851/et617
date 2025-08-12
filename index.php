<?php session_start(); ?>
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta http-equiv="X-UA-Compatible" contents = "IE=edge">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <title>Website with Login & Registration form</title>
    <link rel = "stylesheet" href = "style.css">
    <link href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel= 'stylesheet'>
</head>
<body>
    <header class = "header">
        <nav class = "navbar">
            <a href = "#">Home</a>
            <a href = "#">About</a>
            <a href = "#">Services</a>
            <a href = "#">Contact</a>
        </nav>
        <form action = "#" class = "search-bar">
            <input type = "text" placeholder = "Search...">
            <button type = "submit"><i class='bx bx-search'></i></button>
        </form>
    </header>
    <div class = "background"></div>
    <div class = "container">
        <div class ="content">
            <h2 class = logo>
                <i class ='bx bx-fire-alt'></i> E-learning
            </h2>
            <div class = "text-sci">
                <h2>welcome!<br><span>To our new website</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class = "social-icons">
                    <a href="#"><i class = 'bx bxl-linkedin'></i></a>
                    <a href="#"><i class = 'bx bxl-facebook'></i></a>
                    <a href="#"><i class = 'bx bxl-instagram'></i></a>
                    <a href="#"><i class = 'bx bxl-twitter'></i></a>
                </div>
            </div>
        </div>
        <div class = "logreg-box">
            <!-- Login Form -->
            <div class = "form-box login">
                <form action="login.php" method="POST">
                    <h2>Sign In</h2>
                    <div class = "input-box">
                        <span class = "icon"><i class = 'bx bxs-envelope'></i></span>
                        <input type = "email" name="email" required/>
                        <label>Email</label>
                    </div>

                    <div class = "input-box">
                        <span class = "icon"><i class = 'bx bxs-lock-alt'></i></span>
                        <input type = "password" name="password" required/>
                        <label>Password</label>
                    </div>

                    <div class = "remember-forgot">
                        <label><input type="checkbox">Remember me</label>
                        <a href="#">Forgot password ?</a>
                    </div>

                    <button type="submit" class="bt">Sign In</button>

                    <div class = "login-register">
                        <p>Don't have an account ? <a href="#" class = "register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>

            <!-- Register Form -->
            <div class = "form-box register">
                <form action="register.php" method="POST">
                    <h2>Sign Up</h2>

                    <div class = "input-box">
                        <span class = "icon"><i class = 'bx bxs-user'></i></span>
                        <input type = "text" name="firstName" required/>
                        <label>First name</label>
                    </div>

                    <div class = "input-box">
                        <span class = "icon"><i class = 'bx bxs-user'></i></span>
                        <input type = "text" name="lastName" required/>
                        <label>Last name</label>
                    </div>

                    <div class = "input-box">
                        <span class = "icon"><i class = 'bx bxs-envelope'></i></span>
                        <input type = "email" name="email" required/>
                        <label>Email</label>
                    </div>

                    <div class = "input-box">
                        <span class = "icon"><i class = 'bx bxs-lock-alt'></i></span>
                        <input type = "password" name="password" required/>
                        <label>Password</label>
                    </div>

                    <div class = "remember-forgot">
                        <label><input type="checkbox" required> I agree to the terms & conditions</label>
                    </div>

                    <button type = "submit" class = "bt">Sign Up</button>
                    <div class = "login-register">
                        <p>Already have an account ? <a href="#" class = "login-link">Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src = "script.js"></script>
</body>
</html>
