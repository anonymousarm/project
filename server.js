var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

var matrix = []
var n = 100;
var m = 100;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var mardakerArr = [];

for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y] = Math.floor(Math.random(0 , 5 ) * matrix.length);
       
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
            xotadakerArr.push(xt)
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




setInterval(drawserver, 3000)
function drawserver() {

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
    console.log(matrix);

    io.sockets.emit("matrix", matrix)
}