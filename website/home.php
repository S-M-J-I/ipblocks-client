<body class="bg-gray-100 flex justify-center items-center min-h-screen">
    <div class="text-center bg-white p-10 rounded-lg shadow-xl max-w-2xl fade-in">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to IP Blockchain Pro</h1>
        <p id="typed-text" class="text-lg text-gray-600"></p>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            new Typed("#typed-text", {
                strings: ["This is the home page of the IP Blockchain Pro application."],
                typeSpeed: 50,
                backSpeed: 25,
                showCursor: false
            });
        });
    </script>
</body>