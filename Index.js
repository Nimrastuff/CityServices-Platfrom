const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const loginClose = document.getElementById("loginClose");
const loginForm = document.getElementById("loginForm");

// Show login modal
loginBtn.addEventListener("click", () => loginModal.classList.remove("hidden"));
loginClose.addEventListener("click", () => loginModal.classList.add("hidden"));

// Redirect to signup page
signupBtn.addEventListener("click", () => window.location.href = "Signup.html");

// Login submit
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if(user && user.email === email && user.password === password){
        loginModal.classList.add("hidden");
        window.location.href = "WeProject.html";
    } else {
        alert("Invalid credentials!");
    }
});