function jamDigital() {
    const now = new Date()

    let jam = now.getHours().toString().padStart(2,"0")
    let menit = now.getMinutes().toString().padStart(2,"0")
    let detik = now.getSeconds().toString().padStart(2,"0")

    document.getElementById("jam-digital").textContent = `${jam}:${menit}:${detik}`
};

setInterval(jamDigital,1000)

function mobMenu() {
    const hamburger = document.getElementById("hamburgerID");
    const navbar = document.getElementById("navMenu");

    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
}