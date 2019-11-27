// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1900;
cnv.height = 900;

//Setting arrays
let circleX = [];
let circleY = [];
let circleR = [];
let circleSpeed = [];

//Amount of snowflakes
let bubbleNum = 100;

//Looping creation of snow
for (n = 0; n < bubbleNum; n++) {
    //Random values
    let xVal = Math.randomDec(0, cnv.width);
    let yVal = Math.randomDec(0, cnv.height);
    let rVal = Math.randomDec(5, 10);

    //Speed
    let speedVal = Math.randomDec(2, 5);

    //Setting values into array
    circleX.push(xVal)
    circleY.push(yVal)
    circleR.push(rVal)
    circleSpeed.push(speedVal);
}

requestAnimationFrame(draw);

function draw() {
    //Logic

    //Draw
    ctx.clearRect(0, 0, cnv.width, cnv.height);


    //Creating circle
    for (n = 0; n < bubbleNum; n++) {
        //Change Values
        circleY[n] += circleSpeed[n];
        //Create
        fillCircle(circleX[n], circleY[n], circleR[n])

        //Reset snow
        if (circleY[n] + circleR[n] >= cnv.height) {
            circleY[n] = 0;
            circleX[n] = Math.randomDec(0, cnv.width)
            circleSpeed[n] = Math.randomDec(2, 5);
        }
    }

    //Request another frame
    requestAnimationFrame(draw);
}


//Circle function
function fillCircle(x1, y1, r) {
    ctx.beginPath();
    ctx.arc(x1, y1, r, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}


//Event code listener
document.addEventListener("keydown", keyDownHandler);

//Adding or creating snow
function keyDownHandler(event) {
    console.log(event.code);

    //Adding snow
    if (event.code == "KeyA") {
        //Random values
        let xVal = Math.randomDec(0, cnv.width);
        let yVal = Math.randomDec(0, 0);
        let rVal = Math.randomDec(5, 10);

        //Speed
        let speedVal = Math.randomDec(2, 5);

        //Setting values into array
        circleX.push(xVal)
        circleY.push(yVal)
        circleR.push(rVal)
        circleSpeed.push(speedVal);
    } else if (event.code == "KeyD") {
        //Setting values into array
        circleX.pop()
        circleY.pop()
        circleR.pop()
    }
    fillCircle(circleX, circleY, circleR)
}