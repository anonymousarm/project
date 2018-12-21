
module.exports = class Mardaker extends LivingCreature {
    constructor(x, y,){
        super(x, y,);
        this.energy = 5;
        [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
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
        [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
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
            var mk = new Mardaker(newX, newY)
            mardakerArr.push(mk)
        }
    }

    move() {
        var empty = this.chooseCell(0);
        var newcell = empty[Math.floor(Math.random()* empty.length)]; 
        this.energy--;
        if (newcell) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var empty = this.chooseCell(4);
        var newcell = empty[Math.floor(Math.random()* empty.length)];
         if (newcell) {
            var newX = newcell[0]
            var newY = newcell[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    mardArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 5
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in mardakerArr) {
                if (mardakerArr[i].x == this.x && mardakerArr[i].y == this.y) {
                    mardakerArr.splice(i, 1)
                }
            }
        }
    }
}

