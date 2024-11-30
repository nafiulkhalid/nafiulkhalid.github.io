
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const dot = document.querySelector(".dot");

    // Animate the dot to grow with scroll
    gsap.to(dot, {
        width: "800vw", // Grow beyond the screen size
        height: "800vw",
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".research.html",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
        },
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const dot = document.querySelector(".dot");
    const highlight = document.querySelector(".highlight");

    function updateDotPosition() {
        // Get the bounding box of the "highlight" element
        const highlightRect = highlight.getBoundingClientRect();

        // Calculate position for the dot relative to the question mark's dot
        const dotX = highlightRect.left + highlightRect.width * 0.83;
        const dotY = highlightRect.top + highlightRect.height * 0.68;

        // Set the dot's position dynamically
        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;
    }

    // Update position on window resize and on load
    window.addEventListener("resize", updateDotPosition);
    updateDotPosition();
});

