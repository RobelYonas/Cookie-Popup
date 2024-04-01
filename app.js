// Initialize a GSAP timeline with default settings for all animations within it.
// The default duration for each animation is set to 0.75 seconds, and the easing function is set to 'power1.out' for a smooth start and a stronger finish.
const tl = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "power1.out"
    }
});

// Create a scaling animation for an element with the class 'cookie-container'.
// This animation scales the element from 0 (invisible) to 1 (original size) with an elastic easing effect for a more dynamic appearance.
// The duration for this specific animation is overridden to 1.5 seconds.
tl.fromTo('.cookie-container', {
    scale: 0
}, {
    scale: 1,
    ease: "elastic.out(1, 0.4)",
    duration: 1.5
});

// Animate the opacity and position of an element with the class 'cookie'.
// This animation changes the cookie's opacity from 0 to 1, its horizontal position from -50px to its original position,
// and rotates it from -45 degrees to 0 degrees, making it appear as if the cookie is being placed down.
// This animation is synchronized to start with the previous one using the '<' label.
tl.fromTo('.cookie', {
    opacity: 0,
    x: -50,
    rotation: '-45deg'
}, {
    opacity: 1,
    x: 0,
    rotation: '0deg'
}, '<');

// Animate the text associated with the cookie by moving it from 30px to its original position and fading it in from an opacity of 0 to 1.
// This animation is also synchronized with the cookie animation using the '<' label.
tl.fromTo('.text', {
    x: 30,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}, '<');

// Select the button element from the document.
const button = document.querySelector('button');

// Add a bobbing animation to the cookie, making it move up by 20px and rotate by -20 degrees, then return to its original position and rotation.
// This animation repeats indefinitely and alternates directions (yoyo: true) for a playful effect.
tl.fromTo('.cookie', {
    y: 0,
    rotation: '0deg'
}, {
    y: -20,
    rotation: '-20deg',
    yoyo: true,
    repeat: -1
});

// Add an event listener to the button that triggers an animation on the '.cookie-container' class when clicked.
// This animation fades out the cookie container and moves it down by 100px, providing a smooth transition out with a duration of 0.75 seconds and the 'power1.out' ease.
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {
        opacity: 0,
        y: 100,
        duration: 0.75,
        ease: 'power1.out'
    });
});
