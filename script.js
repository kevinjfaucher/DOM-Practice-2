// Change the text of the second section's heading when the button is clicked
const funText = document.getElementById('funText'); // Grab the heading element
const changeTextButton = document.getElementById('changeTextButton'); // Grab the button element

// Add an event listener to the button to change the text
changeTextButton.addEventListener('click', function() {
    funText.textContent = 'Why did the chicken join a band? Because it had the drumsticks!'; // Change the text
});


/*
document.getElementById('funText'): We select the <h2> 
element with the ID funText so we can modify its content.
Event Listener: We add a listener to the 
button so that when it’s clicked, the content of funText changes.

textContent: This property allows us to change the 
text inside the <h2> element.


*/

// Part 2 ---------------------------------------------------------------------------------------------------------------------------------

/*
Next, we’ll add some interactivity by generating a random fact every time 
the user clicks the "New Random Fact" button.

What We're Doing:

    Array of Facts: We’ll create an array of funny facts.
    Random Index: We’ll randomly pick one of the facts to 
    display when the button is clicked.

*/

// Random Fact Generator
const factText = document.getElementById('fact'); // Grab the paragraph element where the fact is displayed
const newFactButton = document.getElementById('newFact'); // Grab the "New Random Fact" button

// Array of funny facts
const facts = [
    "Octopuses have three hearts, but only one works when they swim!",
    "Scotland's national animal is the unicorn.",
    "Bananas are berries, but strawberries aren't!",
    "A group of flamingos is called a 'flamboyance'.",
    "Humans share about 60% of their DNA with bananas."
];

// Function to change the fact when the button is clicked
newFactButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length); // Pick a random index
    factText.textContent = facts[randomIndex]; // Update the paragraph with a random fact
});

/*
Array: We store multiple facts in an array called facts.
Random Index: We use Math.random() to generate a random number, 
which is used to select a fact from the array.

textContent: We update the text content of the paragraph (factText) to 
display the selected fact.

*/

// Part 3 -----------------------------------------------------------------------------------------------------------------

/*
Now, let’s dive into how you can select specific elements like the header or footer. 

We’ll add interactions when these elements are clicked.

What We're Doing:

    Selecting Elements: We’ll use querySelector to grab the header and footer.

    Manipulating Elements: We’ll change the header’s background color and add 
    a message to the footer when they are clicked.

*/

// Selecting the header and footer
const header = document.querySelector('header'); // Grab the header element
const footer = document.querySelector('footer'); // Grab the footer element

// Changing header text and style
header.addEventListener('click', function() {
    header.style.backgroundColor = '#007bff'; // Change background color on click
    header.querySelector('h1').textContent = 'You clicked the header! It’s now even funnier!'; // Update header text
});

// Adding a funny message to the footer
footer.addEventListener('click', function() {
    const newMessage = document.createElement('p'); // Create a new paragraph element
    newMessage.textContent = 'P.S. You found the secret footer message!'; // Set the content
    footer.appendChild(newMessage); // Add the new paragraph to the footer
});



// Part 4 --------------------------------------------------------------------------------------------------------

// Change the background color of the body when the page is clicked

document.body.addEventListener('click', function() {
    const red = Math.floor(Math.random() * 256); // Generate random red value
    const green = Math.floor(Math.random() * 256); // Generate random green value
    const blue = Math.floor(Math.random() * 256); // Generate random blue value
    const rgbColor = `rgb(${red}, ${green}, ${blue})`; // Set the RGB color
    document.body.style.backgroundColor = rgbColor; // Apply the random color
});

document.querySelectorAll('button, img').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the event from bubbling up to the body
    });
});

// Part 5 -------------------------------------------------------------------------------------------------------------

// const imageButton = document.getElementById('changeImageButton');
// const funnyImage = document.getElementById('funnyImage');

// imageButton.addEventListener('click', function() {
//     funnyImage.src = 'funny2.jpg'; // Change the image source
// });

// Part 6 ---------------------------------------------------------------------------------------------------

//Comment out part 5 for this to work

const imageButton = document.getElementById('changeImageButton');
const funnyImage = document.getElementById('funnyImage');

imageButton.addEventListener('click', function() {
    // Check the current src of the image and toggle between funny1.jpg and funny2.jpg
    if (funnyImage.src.includes('funny1.jpg')) {
        funnyImage.src = 'funny2.jpg'; // Switch to funny2.jpg
    } else {
        funnyImage.src = 'funny1.jpg'; // Switch back to funny1.jpg
    }
});
