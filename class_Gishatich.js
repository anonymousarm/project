
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, ){
        super(x, y, );
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
            var gsh = new Gishatich(newX, newY)
            gishatichArr.push(gsh)
        }
    }

    move() {
        var empty = this.chooseCell(0);
        var newcell = empty[Math.floor(Math.random()* empty.length)];
        this.energy--;
        if (newcell) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var empty = this.chooseCell(0);
        var food = empty[Math.floor(Math.random()* empty.length)];
         if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}
