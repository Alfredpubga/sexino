<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adult Streaming & Download Platform</title>
    <style>
        :root {
            --primary-color: #ffd700;
            --background-color: #121212;
            --header-color: #000;
            --card-color: #1e1e1e;
            --text-color: #fff;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: var(--background-color);
            color: var(--primary-color);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        .header {
            background-color: var(--header-color);
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid var(--primary-color);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header .logo {
            font-size: 24px;
            font-weight: bold;
            color: var(--primary-color);
        }

        .movie-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* دو ستون */
            gap: 20px;
            padding: 20px;
            flex: 1;
        }

        .movie {
            background-color: var(--card-color);
            border: 1px solid #333;
            border-radius: 8px;
            overflow: hidden;
        }

        .movie img {
            width: 100%;
            height: auto;
        }

        .movie .details {
            padding: 15px;
            color: var(--primary-color);
        }

        .movie .details h2 {
            margin: 0 0 10px;
            font-size: 18px;
        }

        .movie .details p {
            margin: 0;
        }

        .movie .details button {
            background: linear-gradient(45deg, var(--primary-color), #b8860b);
            color: #000;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 14px;
            margin-top: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .movie .details button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        }

        .footer {
            background-color: var(--header-color);
            text-align: center;
            padding: 10px;
            border-top: 1px solid var(--primary-color);
            color: var(--primary-color);
        }

        .auth-buttons {
            position: absolute;
            top: 15px;
            right: 20px;
            display: flex;
        }

        .auth-buttons .btn-login, 
        .auth-buttons .btn-signup {
            background: linear-gradient(45deg, var(--primary-color), #b8860b);
            color: #000;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 14px;
            margin-left: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .auth-buttons .btn-login:hover, 
        .auth-buttons .btn-signup:hover {
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        }

        .payment-popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: var(--card-color);
            color: var(--primary-color);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
            z-index: 1000;
        }

        .payment-popup.active {
            display: block;
        }

        .payment-popup button {
            margin-top: 10px;
        }

        .sidebar {
            width: 250px;
            background-color: var(--card-color);
            color: var(--primary-color);
            padding: 20px;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.7);
            height: 100vh;
            overflow-y: auto;
            position: fixed;
            top: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }

        .sidebar.active {
            transform: translateX(0);
        }

        .sidebar h3 {
            margin-bottom: 15px;
        }

        .sidebar ul {
            list-style: none;
            padding: 0;
        }

        .sidebar ul li {
            margin-bottom: 10px;
        }

        .sidebar ul li a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.2s;
        }

        .sidebar ul li a:hover {
            color: #b8860b;
        }

        .menu-toggle {
            display: none;
            position: absolute;
            top: 15px;
            left: 20px;
            background: var(--primary-color);
            border: none;
            color: var(--header-color);
            padding: 10px 15px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
            z-index: 101;
        }

        @media (max-width: 768px) {
            body {
                flex-direction: column;
            }

            .movie-container {
                margin-left: 0;
                padding: 10px;
                grid-template-columns: repeat(2, 1fr);
            }

            .sidebar {
                width: 100%;
                height: auto;
                position: fixed;
                box-shadow: none;
            }

            .menu-toggle {
                display: block;
            }

            .auth-buttons {
                position: fixed;
                bottom: 20px;
                right: 20px;
                flex-direction: column;
                display: none; /* مخفی کردن در حالت گوشی */
            }

            .auth-buttons.active {
                display: flex; /* نمایش در سه خط */
            }

            .auth-buttons .btn-login, 
            .auth-buttons .btn-signup {
                padding: 8px 15px;
                font-size: 12px;
                margin: 5px 0;
            }
        }

        @media (max-width: 480px) {
            .movie-container {
                grid-template-columns: 1fr;
            }
        }

    </style>
</head>
<body>
    <div class="header">
        <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
        <h1>
            SE<span class="highlight">X</span>INO
            <div class="auth-buttons" id="authButtons">
                <a href="form.html"><button class="btn-login" onclick="showLogin()">Login</button></a>
                <a href="form.html"><button class="btn-signup" onclick="showSignUp()">Sign Up</button></a>
            </div>
        </h1>
    </div>

    <div class="sidebar" id="sidebar">
        <h3>Categories</h3>
        <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Comedy</a></li>
            <li><a href="#">Horror</a></li>
            <li><a href="#">All Categories</a></li>
        </ul>
        <h3>Actors</h3>
        <ul>
            <li><a href="#">Aaliyah Hadid</a></li>
            <li><a href="#">Aaliyah Love</a></li>
            <li><a href="#">Abby Somers</a></li>
            <li><a href="#">... and More</a></li>
        </ul>
    </div>

<div class="movie-container" id="movieContainer"></div>

    <div class="footer">
        &copy; 2025 sexino | Privacy Policy | Terms of Service
    </div>
<script src="movies.js"></script>
<script src="script3.js"></script>
<script>
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const authButtons = document.getElementById("authButtons");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    function toggleAuthButtons() {
        authButtons.classList.toggle("active");
    }

    // اضافه کردن رویداد به منوی سه خطی برای دکمه لاگین و ثبت‌نام
    menuToggle.addEventListener("click", toggleSidebar);

    // اگر می‌خواهید لاگین و ساین‌اپ در موبایل نمایش داده شوند
    menuToggle.addEventListener("click", toggleAuthButtons);
</script>
</body>
</html>
