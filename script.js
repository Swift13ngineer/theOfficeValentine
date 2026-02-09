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

// No button interactions
noButton.addEventListener('mouseover', () => {
    if (!isClicked) {
        bannerImage.src = images.noHover;
    }
});

noButton.addEventListener('mouseout', () => {
    if (!isClicked) {
        bannerImage.src = images.init;
    }
});

noButton.addEventListener('click', () => {
    bannerImage.src = images.noClick;
    isClicked = true;

    noClickCount++;
    const newSize = 2.25+ (noClickCount*0.5);
    yesButton.style.fontSize= `${newSize}rem`;

    noButton.textContent = "Seriously?";
});

// Yes button interactions
yesButton.addEventListener('mouseover', () => {
    if (!isClicked) {
        bannerImage.src = images.yesHover;
    }
});

yesButton.addEventListener('mouseout', () => {
    if (!isClicked) {
        bannerImage.src = images.init;
    }
});

yesButton.addEventListener('click', () => {
    heading.innerHTML= "Yaay! Knew you'd say yes <3 <br> See you soon!!";
    bannerImage.src = images.yesClick;
    isClicked = true;
});

// Reset when clicking anywhere else on the page
document.addEventListener('click', (event) => {
    // Check if click is outside both buttons
    if (!noButton.contains(event.target) && !yesButton.contains(event.target)) {
        bannerImage.src = images.init;
        isClicked = false;

        noClickCount = 0;
        yesButton.style.fontSize='';
        heading.textContent = "Will you be my Valentine?";
        noButton.textContent = "No"
    }
});