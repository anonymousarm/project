var LivingCreature = require("./class_LivingCreature.js")
module.exports = class Grass extends LivingCreature {
    mult() {
        this.multiply++

        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];

        if(this.multiply >= 8 && newCell){
            var newGrass = new Grass(newCell[0],newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}