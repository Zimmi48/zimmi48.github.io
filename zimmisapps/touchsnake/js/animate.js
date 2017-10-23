/* The functions available through the animate namespace are:
** animate.menu()
** animate.game()
*/
var animate = {

	// PUBLIC FUNCTIONS

	menu : function() {

		// update display
		display.menu();

		// update snake position
		game.moveSnake();

		// update snake speed if it is going to reach the edge of the window
		// or if it is outside and going in the wrong direction
		if (game.goingOut()) {
			game.turnRight();
		}
	},

    game : function() {

		// update display
		display.game();

		game.moveSnake();

		// quit game if snake has hit its own tail
		if (game.dead()) {
			load.unloadGame();
			setTimeout(load.scores, 2000);
		}
    }
}
