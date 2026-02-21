const maskLayer = document.getElementById('mask-layer');
const hoverTarget = document.getElementById('hover-target');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

let isHovered = false;
let currentSize = 40;

window.addEventListener('mousemove', (e) => {
    // We use pageX and pageY to account for document scroll
    mouseX = e.pageX;
    mouseY = e.pageY;
});

if (hoverTarget) {
    hoverTarget.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    hoverTarget.addEventListener('mouseleave', () => {
        isHovered = false;
    });
}

function animate() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    const targetSize = isHovered ? 400 : 40;
    currentSize += (targetSize - currentSize) * 0.15;

    const maskX = currentX - (currentSize / 2);
    const maskY = currentY - (currentSize / 2);

    if (maskLayer) {
        maskLayer.style.webkitMaskPosition = `${maskX}px ${maskY}px`;
        maskLayer.style.webkitMaskSize = `${currentSize}px`;

        maskLayer.style.maskPosition = `${maskX}px ${maskY}px`;
        maskLayer.style.maskSize = `${currentSize}px`;
    }

    requestAnimationFrame(animate);
}

animate();
