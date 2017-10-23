/* The functions accessible via the various event namespaces are:
** key.down(e)
** key.up(e)
** touch.start(e)
** touch.end(e)
** mouse.down(e)
** mouse.up()
*/
var key = (function() {

	// PRIVATE VARIABLES

	// these variables are used to make sure a key has been up before firing again
	var activeRight = 1;
	var activeLeft = 1;

	return {

		// PUBLIC FUNCTIONS

		down : function(e) {
			// Right pressed
			if (e.keyCode == 39 && activeRight) {
				display.action(Infinity);
				activeRight = 0;
			}
			// Left pressed
			else if (e.keyCode == 37 && activeLeft) {
				display.action(0);
				activeLeft = 0;
			}
		},

		up : function(e) {
			if (e.keyCode == 39) {
				activeRight = 1;
			}
			else if (e.keyCode == 37) {
				activeLeft = 1;
			}
		}
	};
})();

var touch = (function() {

	// PRIVATE VARIABLES

	// this variable is used to make sure a finger has been up before firing again
	var active = 1;

	return {

		// PUBLIC FUNCTIONS
		start : function(e) {
			e.preventDefault();
			if (active) {
				active = 0;
				var touch_x = e.changedTouches[0].pageX;
				var touch_y = e.changedTouches[0].pageY;
				display.action(touch_x, touch_y);
			}
		},

		end : function(e) {
			e.preventDefault();
			active = 1;
		}
	};
})();

var mouse = (function() {

	// PRIVATE VARIABLES

	// this variable is used to make sure the mouse has been up before firing again
	var active = 1;

	return {

		// PUBLIC FUNCTIONS
		down : function(e) {
			if (active) {
				active = 0;
				var click_x = e.pageX;
				var click_y = e.pageY;
				display.action(click_x, click_y);
			}
		},

		up : function() {
			active = 1;
		}
	};
})();
