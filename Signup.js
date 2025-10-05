const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("userPassword").value.trim();
    const age = document.getElementById("userAge").value.trim();
    const location = document.getElementById("userLocation").value.trim();

    const newUser = { name, email, password, age, location };
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Registered successfully!");
    window.location.href = "WeProject.html"; // Redirect to categories
});