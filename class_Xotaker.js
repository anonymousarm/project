var LeavingCreature = require("./living_creature.js");
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
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
        this.getNewCoordinates();
        return super.chooseCell(character);
    }


    mult() {
        var empty = this.chooseCell(0);
        var newcell = empty[Math.floor(Math.random()* empty.length)];
        if (newcell && this.energy > 10) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move() {
        var empty = this.chooseCell(0);
        var newcell = empty[Math.floor(Math.random()* empty.length)];
        this.energy--;
        if (newcell) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var empty = this.chooseCell(1);
        var newcell = empty[Math.floor(Math.random()* empty.length)];
        if (newcell) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[this.y][this.x] = 2

            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}