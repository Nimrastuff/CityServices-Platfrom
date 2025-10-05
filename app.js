const user = JSON.parse(localStorage.getItem("currentUser"));
if(!user || !user.name) window.location.href = "index.html"; // force login

document.getElementById("welcomeUser").textContent = `Welcome, ${user.name}!`;

// Category click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");
        window.location.href = `Services.html?category=${category}`;
    });

});
