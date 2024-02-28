// JavaScript Fundamentals - Day 20: Assignment

// Task 1: Selecting Elements

// 1. Create an HTML document with various elements, including headings, paragraphs, and divs.
// 2. Use JavaScript to select and log the following elements to the console:

//    a. All paragraphs on the page using `getElementsByTagName`.
   
//    b. All elements with the class "info" using `getElementsByClassName`.
   
//    c. The element with the ID "header" using `getElementById`.
   
//    d. The first element with the class "highlight" using `querySelector`.

// Task 2: Modifying Elements

// 3. Change the text content of the second paragraph to "This paragraph is now updated!".
// 4. Change the background color of the div with the ID "header" to a different color of your choice.

// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.
// 6. Append the newly created `h3` element to the end of the body of the HTML document.

// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.

// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.

// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.
// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.

// *These tasks will help you practice selecting, modifying, creating, and removing elements from the DOM using JavaScript. Good luck! 🌐*


// Getting Elements by Tag Name:

//Task1
//a)
let parags = document.getElementsByTagName("p");
for(let i = 0; i < parags.length; i++){
    console.log(parags[i]);
}

//b)
let paragsInfo = document.getElementsByClassName("info");
for(let i = 0; i < paragsInfo.length; i++){
    console.log(paragsInfo[i]);
}

//c)
let header = document.getElementById( "header" );
console.log(header);

//d)
let highlight = document.querySelector(".highlight");
console.log(highlight);

//Task2
let secondParag = parags[1];
secondParag.innerHTML = "Bida ang Saya";

header.style.backgroundColor = "pink";

//Task3
let newElement = document.createElement("h3");
let insideText = document.createTextNode("hirap naman nito");

newElement.appendChild(insideText);

document.body.appendChild(newElement);

//Task4
let firstParag = document.querySelector("p");
firstParag.remove()

//Task5
header.addEventListener("click", function(){
    console.log("Header Clicked");
})

//Task 6
let colors = ["blue", "yellow", "red", "pink", "orange"];

for(let i = 0; i < parags.length; i++){
    parags[i].style.backgroundColor = colors[i];
}







