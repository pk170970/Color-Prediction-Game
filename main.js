// Declaring variables
body = document.body;
const red = document.getElementById("random-red");
const green = document.getElementById("random-green");
const blue = document.getElementById("random-blue");
const cards = document.querySelectorAll(".random-pickers");
let text = document.getElementById("text");
let dataColor;
let count = 0;

// 1. Generate Random rgb color, store the colors value, store the formed color value and render in browser. 

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

//2. Converting rgb color into percentage and displaying the color


function displayColor() {
    let redValue = randomRGB();
    let blueValue = randomRGB();
    let greenValue = randomRGB();
    red.textContent = `Red: ${Math.floor(redValue / 255 * 100) + "%"}`;
    green.textContent = `Green: ${Math.floor(blueValue / 255 * 100) + "%"}`;
    blue.textContent = `Blue: ${Math.floor(greenValue / 255 * 100) + "%"}`;

    dataColor = `rgb(${redValue},${blueValue},${blueValue})`;
}

displayColor();

//3. Generating random color for cards 

let colorRandom = () => `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
console.log(colorRandom(), dataColor);

//4. Apply event listeners on cards

let randomCardIndex = Math.floor(Math.random() * 6);
cards[randomCardIndex].style.backgroundColor = dataColor; // Making the formed color to get random places in any card.

cards.forEach((e, i) => {

    if (randomCardIndex === i && count !==6 ) {
        cards[randomCardIndex].addEventListener("click", () => {
            count++;
            console.log(count);
            if (count == 1) {
                text.textContent = `Wao 😍, you are pro is color choosing. You grabbed in ${count}st attempt.`;


            } else if (count == 2) {
                text.textContent = `Nice, you are good is color choosing. You grabbed in ${count}nd attempt.`;


            } else if (count == 3) {
                text.textContent = `Not Bad, You grabbed in ${count}rd attempt. Well done`


            } else if (count == 4) {
                text.textContent = `Keep going, You grabbed in ${count}th attempt. Nice`

            
            } else if (count == 5) {
                text.textContent = `Finally, You grabbed in ${count}th attempt. Nice`

            }

            delayAndRefresh();


        })
    } else {
        cards[i].style.backgroundColor = colorRandom();
        e.addEventListener("click", () => {
            count++;
            if (count == 6) {
                text.textContent = `This was your ${count}th attempt. Try again Refresh the brower`;
            }
            e.style.backgroundColor = "white";
            e.style.border = "2px solid black"
        })
    }

});

function delayAndRefresh() {
    body.style.backgroundColor = "#242B2E";
    text.style.color = "white";
    cards[randomCardIndex].style.backgroundColor = "white";
    setTimeout(function () {
        location.reload();
    }, 2500)
}