const cards = document.querySelectorAll('.box');

cards.forEach(box => {
    const img = box.querySelector('img');
    const rect = img.getBoundingClientRect();
    const containerRect = box.getBoundingClientRect();

    const centerX = rect.left - containerRect.left + rect.width / 2;
    const centerY = rect.top - containerRect.top + rect.height / 2;

    img.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = -mouseY / 20;
        const rotateY = mouseX / 20;

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'rotateX(0) rotateY(0)';
    });
});




// Function to randomize the order of the images
function randomizeImages() {
    const container = document.querySelector('.container');
    const boxes = Array.from(container.querySelectorAll('.box'));
    boxes.forEach(box => container.removeChild(box));
    shuffleArray(boxes);
    boxes.forEach(box => container.appendChild(box));
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Call the randomizeImages function after all images have loaded
window.addEventListener('load', randomizeImages);
