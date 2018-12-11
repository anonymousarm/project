var matrix = []
var n = 100; 
var m = 100;

var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var mardakerArr = [];

function setup() {
    for (var y = 0; y <n; y++){
        matrix[y]= [];
      for (var x = 0; x <m; x++){
        matrix[y][x]= random(0,5)
        matrix[y][x] = parseInt(matrix[y][x])
    }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var md = new Mard(x, y)
                mardArr.push(md)
            }
            else if (matrix[y][x] == 5) {
                var mk = new Mardaker(x, y)
                mardakerArr.push(mk)
            }


        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 4) {
                fill("#FDDCB1")
            }
            else if (matrix[y][x] == 5) {
                fill("black")
            }

            rect(x * side, y * side, side, side)

            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in mardArr) {
        mardArr[i].eat()
        mardArr[i].move()
        mardArr[i].mult()
        mardArr[i].die()
    }
    for (var i in mardakerArr) {
        mardakerArr[i].eat()
        mardakerArr[i].move()
        mardakerArr[i].mult()
        mardakerArr[i].die()
    }
}