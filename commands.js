function MoveCommand($pony, $direction) {
    this.$pony = $pony;
    this.$direction = $direction;
}

MoveCommand.prototype.map = {
    '1': {'top': '-=30px'},
    '-2': {'top': '+=30px'},
    '2': {'left': '+=30px'},
    '-3': {'left': '-=30px'}
}

MoveCommand.prototype.run = function() {
    this.$pony.animate(this.map[this.$direction]);
}

MoveCommand.prototype.undo = function() {
    this.$pony.animate(this.map[~this.$direction]);
}
