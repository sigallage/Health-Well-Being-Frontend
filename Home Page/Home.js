document.addEventListener("DOMContentLoaded", () => {
    // Tile Hover Animation
    document.querySelectorAll('.tile').forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.style.transform = "scale(1.15)";
        });
        tile.addEventListener('mouseleave', () => {
            tile.style.transform = "scale(1)";
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
