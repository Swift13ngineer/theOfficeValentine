// DOM Elements
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const bannerImage = document.getElementById('banner-image');
const heading = document.querySelector('h1');

// Image sources
const images = {
    init: 'assets/dwight.webp',
    noHover: 'assets/michaelNo.jpg',
    noClick: 'assets/sadDwight.webp',
    yesHover: 'assets/jimSmile.jpg',
    yesClick: 'assets/dateMike.jpg'
};

let isClicked = false; // Track if a button was clicked
let noClickCount = 0;

// No button text cycle
const noButtonTexts = ['Seriously?', 'click Yes please', 'please be my valentine?', 'pleaseeeee'];

// No button interactions
noButton.addEventListener('mouseover', () => {
    if (!isClicked) {
        bannerImage.src = images.noHover;
        noButton.textContent = "No!!";
    }
});

noButton.addEventListener('mouseout', () => {
    if (!isClicked) {
        bannerImage.src = images.init;
    }
});

noButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent document click from triggering
    bannerImage.src = images.noClick;
    isClicked = true;

    // Cycle through no button texts
    noButton.textContent = noButtonTexts[noClickCount % noButtonTexts.length];

    // Increase yes button size
    const newYesSize = 2.25 + (noClickCount * 0.5);
    yesButton.style.fontSize = `${newYesSize}rem`;

    // Decrease no button size
    const newNoSize = Math.max(1, 2.25 - (noClickCount * 0.2)); // Min size of 1rem
    noButton.style.fontSize = `${newNoSize}rem`;

    noClickCount++;
});

// Yes button interactions
yesButton.addEventListener('mouseover', () => {
    if (!isClicked) {
        bannerImage.src = images.yesHover;
        noButton.textContent = "yessss click it";
    }
});

yesButton.addEventListener('mouseout', () => {
    if (!isClicked) {
        bannerImage.src = images.init;
        noButton.textContent = "go back and click Yes!"
    }
});

yesButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent document click from triggering
    heading.innerHTML = "Yayyy! I knew you'd say yes! Love youuu 🧡<br>Happy Valentine's Day 💕";
    bannerImage.src = images.yesClick;
    isClicked = true;
});

// Reset when clicking anywhere else on the page
document.addEventListener('click', (event) => {
    // Check if click is outside both buttons
    if (!noButton.contains(event.target) && !yesButton.contains(event.target)) {
        resetEverything();
    }
});

// Reset function
function resetEverything() {
    bannerImage.src = images.init;
    isClicked = false;
    noClickCount = 0;
    yesButton.style.fontSize = '';
    noButton.style.fontSize = '';
    heading.textContent = "Will you be my Valentine?";
    noButton.textContent = "No";
}