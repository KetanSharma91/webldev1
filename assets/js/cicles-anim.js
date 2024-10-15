function detectDeviceType() {
    // Check the screen width
    if (window.innerWidth <= 768) {
        // Mobile device
        console.log("mobile");
        return 'mobile';
        
    } else {
        // Laptop/desktop
        console.log("pC");
        return 'laptop';
    }
}


const form = document.getElementById('story');
const cursor = document.getElementById('circle-cursor');
// const hero = document.getElementById('story');

let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;

const deviceType = detectDeviceType();
            if (deviceType === 'laptop') { 

form.addEventListener('mousemove', (e) => {
    const rect = form.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

form.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

form.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

function animateCircle() {
    const speed = 0.1; // Adjust this value for smoother or faster movement
    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY - circleY) * speed;

    // Move the circle
    cursor.style.transform = `translate(${circleX - 25}px, ${circleY - 25}px)`;
    // Move the cursor inside the circle with a smaller offset
    cursor.style.backgroundPosition = `${(mouseX - circleX) * 1.5}px ${(mouseY - circleY) * 1.5}px`;

    requestAnimationFrame(animateCircle);
}
            }

animateCircle();