var side = 20;
var socket = io  ();

var m = 20
var n = 20

function setup() {
    frameRate(5);
    createCanvas(m * side, n * side)
    background('#33FFFF');
}


function drawMatrix(matrix) {
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#FDDCB1")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * side, y * side, side, side);
            }
        }
    }
}

socket.on("matrix", drawMatrix)