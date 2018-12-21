
module.exports = class Mard extends LivingCreature {
    constructor(x, y,){
        super(x, y,);
        this.energy = 5;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mult() {
        var empty = this.chooseCell(0);
        var newcell = empty[Math.floor(Math.random()* empty.length)];
        if (newcell && this.energy > 10) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[newY][newX] = 1
            var md = new Mard(newX, newY)
            mardArr.push(md)
        }
    }

    move() {
        var empty = this.chooseCell(0);
        var newcell = empty[Math.floor(Math.random()* empty.length)];
        this.energy--;
        if (newcell) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var food2Arr = this.chooseCell(1);
        var food2 = food2Arr[Math.floor(Math.random()* food2Arr.length)];

        var food1Arr = this.chooseCell(2);
        var food1 = food1Arr[Math.floor(Math.random()* food1Arr.length)];

        var foodArr = this.chooseCell(3);
        var food = foodArr[Math.floor(Math.random()* foodArr.length)];

        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 4
        }
        if (food1) {
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }


            this.x = newX
            this.y = newY
            this.energy += 4
        }
        if (food2) {
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }


            this.x = newX
            this.y = newY
            this.energy -= 4
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1)
                }
            }
        }
    }
}
