let numSquares = 6;
let colors = genRandomColors(numSquares);

let squares = document.querySelectorAll(".square");
let pickedColor = randomColor();

// let colorChange = document.querySelector(".changeColor");
let changeDisplay = document.querySelector(".changeDisplay");
let message = document.querySelector("#message");
let mainHead = document.querySelector("#mainHead");
let resetButton = document.querySelector("#stripe button");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");
let mode = document.querySelectorAll(".mode");

for(let i=0; i<mode.length; i++){
    mode[i].addEventListener("click", function() {

        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent.toLowerCase() === "easy" ? numSquares = 3 : numSquares = 6;
        // if(this.textContent.toLowerCase() === "easy"){
        //     numSquares = 3;
        // }
        // else{
        //     numSquares = 6;
        // }

        reset();

        // how many squares to show
        // pick that many colors
        // pick a random color from list
        // reflect changes on the app

    });
}

function reset() {
    colors = genRandomColors(numSquares);
    pickedColor = randomColor();

    changeDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors !";
    message.textContent = "";
    
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    mainHead.style.backgroundColor = "steelblue";
}



mainHead.style.backgroundColor = "steelblue";
hardBtn.classList.add("selected");

// easyBtn.addEventListener("click", function() {
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");

//    numSquares = 3;
//    colors = genRandomColors(numSquares);
//    pickedColor = randomColor();

//    for(let i=0; i<squares.length; i++){
//        if(colors[i]){
//            squares[i].style.backgroundColor = colors[i];
//        }
//        else{
//            squares[i].style.display = "none";
//        }
//    }

//    changeDisplay.textContent = pickedColor;
//    mainHead.style.backgroundColor = "steelblue";
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");

//     numSquares = 6;
//     colors = genRandomColors(numSquares);
//     pickedColor = randomColor();
//     }
 
//     for(let i=0; i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";

//     changeDisplay.textContent = pickedColor; 
//     mainHead.style.backgroundColor = "steelblue";   
// });

resetButton.addEventListener("click", function(){
    reset();
    // // gen new colors
    // colors = genRandomColors(numSquares);
    // // pick randomcolor and add it in pickedColor
    // pickedColor = randomColor();
    // changeDisplay.textContent = pickedColor;
    // // change the square colors.
    // mainHead.style.backgroundColor = "steelblue";
    // resetButton.textContent = "New Colors";
    // message.textContent = "";
    
    // for(let i = 0; i < colors.length; i ++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
});


// color
// colorChange.style.color = pickedColor;
// text
changeDisplay.textContent = pickedColor;


for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        // grab the color
        let clickedColor = this.style.backgroundColor;
        // compare the color to the picked color
        if(clickedColor === pickedColor){
            message.textContent = "Correct !";
            changeColor(clickedColor);
            mainHead.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again !";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again !";
        }
    });
}

function changeColor (color) {
    // loop through all the squares
    // all the suyares get the === color
    for (let i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = color;
    }
}

// returns a random color from the list
function randomColor(){
    let ranNum = Math.floor(Math.random() * colors.length);
    return colors[ranNum];
}

// generate random colors of x num's
function genRandomColors(num) {
    let colorArr = new Array;
    for(let i = 0; i < num; i ++){
        // gen random colors num times
        colorArr.push(genColor());
    }
    return colorArr;
}

function genColor(){
    // red
    let r = Math.floor(Math.random() * 256);
    // green
    let g = Math.floor(Math.random() * 256);
    // blue
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}