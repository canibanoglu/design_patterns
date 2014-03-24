function PonyMover($pony, $log) {
  this.$pony = $pony
  this.$log = $log

  // Stack of all the moves. Eg.: ['left', 'up', 'down']
  this.commands = []
}

PonyMover.prototype.createCommand = function(direction) {
    return new MoveCommand(this.$pony, direction);
}

PonyMover.prototype.directionMap = {
    '1': 'up',
    '-2': 'down',
    '2': 'right',
    '-3': 'left'
}

PonyMover.prototype.move = function(keyCode) {
  var direction = keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    var command = this.createCommand(direction)
    this.commands.push(command)
    command.run()
    this.$log.append('<li>' + this.directionMap[direction] + '</li>')
  }
}

PonyMover.prototype.undo = function() {
  // Get the last move
  var lastCommand = this.commands.pop()

  if (lastCommand) {
    lastCommand.undo()
    this.$log.find('li:last').remove()
  }
}
