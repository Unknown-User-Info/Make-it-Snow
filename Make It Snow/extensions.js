
//Random decimal between 2 values
Math.randomDec = function(low, high) {
    return Math.random() * (high - low) + low;
}

//random int between 2 values
Math.randomInt = function(low, high) {
    return Math.floor(Math.randomDec(low, high));
}

/*
//Event code listener
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
    console.log(event.code);
}
*/


/* Graphics
    requestAnimationFrame(draw);

    function draw() {
        //Logic

        //Draw
        ctx.clearRect(0, 0, cnv.width, cnv.height);

        //Request another frame
        requestAnimationFrame(draw);
    }


*/