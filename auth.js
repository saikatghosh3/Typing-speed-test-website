// JavaScript for Login & Sign-Up functionality

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    // Simple validation (in a real scenario, use backend validation)
    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Sign-Up Successful! Please login.");
        showLogin(); // Show login page after sign-up
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Fetch stored user details from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if the credentials match
    if (username === storedUsername && password === storedPassword) {
        alert("Login Successful!");
        showTypingTest(); // Show typing test page
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});

// Function to show sign-up form
function showSignUp() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("signup-section").style.display = "block";
}

// Function to show login form
function showLogin() {
    document.getElementById("signup-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}

// Function to show typing test after login
function showTypingTest() {
    document.getElementById("auth-section").style.display = "none"; // Hide login/signup
    document.getElementById("typingTest-section").style.display = "block"; // Show typing test
}
