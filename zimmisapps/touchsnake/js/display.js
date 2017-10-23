/* The functions available through the display namespace are:
** display.action(x, y)
** display.resize()
** display.menu()
** display.game()
** display.scores(final_score, best_scores)
** display.pause()

** The getters available through the display namespace are:
** display.getCenter()

** The setters available through the display namespace are:
** display.setState(action, display, color, position, caption)
** display.setBestScores(bestScores)
*/

var display = (function() {

	// the display object will be used to provide public functions for this namespace
	var display = {};

	// PRIVATE CONSTANTS

	const font_suffix = "px SF Burlington Script Bold";
	// colors
	const lightGray = "#D3D3D3";
	const lightBlue = "#D3F3F3";

	// PRIVATE VARIABLES

	var canvas;
	var context;

	// variables whose value change when the window is resized
	var diameter = 20;
	// the center coordinates are in grid units
	// their purpose is to inform on how much of the grid is visible
	var center = {};

	var frameCount;

	// variables to remember the current state of the game
	var final_score;
	var best_scores;
	var caption = "";
	var actionState; // = "language menu", "start menu", "scores menu", "game playing", "game over", "pause", "right only", "left only", "center only", "unactive" (default)
	var displayState; // = "menu", "game", "scores", "pause", "nothing" (default)
	var colorState; // = "normal" (default), "gray"
	var positionState; // = "relative" (default), "absolute"

	var updateButtonPlacement = 0;

	var title = new Button("title");
	var english = new Button("english");
	var french = new Button("french");
	var play = new Button("play");
	var help = new Button("help");
	var scores = new Button("bestscores");
	var retry = new Button("retry");
	var menu = new Button("menu");
	var pause = new Button("playpause");
	var medals = [new Button("medal1"), new Button("medal2"), new Button("medal3")];
	// glod, silver, bronze

	// PUBLIC GETTERS

	display.getCenter = function() { return center; }

	// PUBLIC SETTERS

	display.setState = function(action, display, color, position, new_caption) {
		actionState = action ? action : "unactive";
		displayState = display ? display : "nothing";
		colorState = color ? color : "normal";
		positionState = position ? position : "relative";
		caption = new_caption ? new_caption : "";
		frameCount = 0;
	};

	display.setBestScores = function(bestScores) {
		best_scores = bestScores;
	};

	// PUBLIC FUNCTIONS

	// action function
	display.action = function(x, y) {
		switch (actionState) {

			case "language menu":
				if (english.on(x, y)) {
					language.set("english");
					updateButtonPlacement = 1;
					load.returnToMainMenu();
				}
				else if (french.on(x, y)) {
					language.set("french");
					updateButtonPlacement = 1;
					load.returnToMainMenu();
				}
				break;

			case "start menu":
				if (play.on(x, y)) {
					load.unloadMenu();
					updateButtonPlacement = 1;
					load.game();
				}
				else if (help.on(x, y)) {
					load.unloadMenu();
					updateButtonPlacement = 1;
					load.help();
				}
				else if (scores.on(x, y)) {
					updateButtonPlacement = 1;
					load.bestScores();
				}
				else {
					snakeControl(x, y);
				}
				break;

			case "scores menu":
				if (menu.on(x, y)) {
					updateButtonPlacement = 1;
					load.returnToMainMenu();
				}
				else {
					snakeControl(x, y);
				}
				break;

			case "game playing":
				snakeControl(x, y);
				break;

			case "game over":
				if (retry.on(x, y)) {
					updateButtonPlacement = 1;
					load.game();
				}
				else if (menu.on(x, y)) {
					updateButtonPlacement = 1;
					load.menu();
				}
				break;

			case "pause":
				if (pause.on(x, y)) {
					updateButtonPlacement = 1;
					load.unloadPause();
				}
				else if (menu.on(x, y)) {
					load.unloadGame();
					updateButtonPlacement = 1;
					load.menu();
				}
				break;

			case "right only":
				if (onRight(x)) {
					game.turnRight();
					load.help();
				}
				break;

			case "left only":
				if (onLeft(x)) {
					game.turnLeft();
					load.help();
				}
				break;

			case "center only":
				if (pause.on(x, y)) {
					updateButtonPlacement = 1;
					load.help();
				}
				break;

			default: // "unactive"
				break;
		}
	}

	// display functions
    display.resize = function() {

		// if first time call: load canvas and context
		if (!context) {
			if (!canvas) {
				canvas = document.getElementById('my_canvas');
			}
			context = canvas.getContext('2d');
		}

		// adjust canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

		// update diameter so that the viewable grid is about the same
		diameter = Math.ceil((canvas.width + canvas.height)/60);

		// update central point position
		center.x = Math.floor(canvas.width/diameter/2);
		center.y = Math.floor(canvas.height/diameter/2);

		// to signal that the button placement must be updated
		updateButtonPlacement = 1;

		// pause button
		pause.setPlacement((center.y-1)*diameter, 3*diameter, (center.x-1)*diameter, 3*diameter);

		// update display
        switch (displayState) {

			case "menu":
				display.menu();
				break;

			case "game":
				display.game();
				break;

			case "scores":
				display_scores();
				break;

			case "pause":
				display.pause();
				break;

			default: // "nothing"
				break;
		}
    };

	display.menu = function() {
		drawBackgroud();
		drawSnake();
		displayMenu();
	}

	display.game = function() {
		drawBackgroud();
		drawFood();
		drawSnake();
		displayCurrentScore();
	}

	display.scores = function(final_sc, best_sc) {
		// We keep these values because we may need to display them again on resize
		final_score = final_sc;
		best_scores = best_sc;
		display_scores();
	}

	display.pause = function() {
		drawBackgroud();
		drawFood();
		drawSnake();
		displayCurrentScore();
		displayPause();
	}

	// PRIVATE FUNCTIONS

	// display_scores is the private version with no arguments of display.scores
	function display_scores() {
		drawBackgroud();
		drawFood();
		drawSnake();
		displayScores();
	}

	// action function
	function snakeControl(x, y) {
		if (pause.on(x,y)) {
			load.pause();
		}
		else if (onRight(x)) {
			game.turnRight();
		}
		else if (onLeft(x)) {
			game.turnLeft();
		}
	}

	// boolean functions
	function onRight(x) {
		return x > pause.x2;
	}

	function onLeft(x) {
		return x < pause.x1;
	}

	// draw functions
	function drawBackgroud() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "white";
		if (frameCount < 5) {
		switch (actionState) {

			case "right only":
				context.fillRect(0, 0, pause.x2 + 1, canvas.height);
				context.fillStyle = lightBlue;
				context.fillRect(pause.x2 + 1, 0, canvas.width - pause.x2 - 1, canvas.height);
				break;

			case "left only":
				context.fillRect(pause.x1, 0, canvas.width - pause.x1, canvas.height);
				context.fillStyle = lightBlue;
				context.fillRect(0, 0, pause.x1, canvas.height);
				break;

			case "center only":
				context.fillRect(0, 0, canvas.width, canvas.height);
				context.fillStyle = lightBlue;
				context.fillRect(pause.x1, pause.y1, pause.width, pause.height);
				break;

			default:
				context.fillRect(0, 0, canvas.width, canvas.height);
		}
			frameCount ++;
			frameCount %= 10;
		}
		else {
			context.fillRect(0, 0, canvas.width, canvas.height);
			frameCount ++;
			frameCount %= 10;
		}
	}

	function drawSnake() {
		if (colorState == "gray") {
			context.fillStyle = lightGray;
		}
		else {
			context.fillStyle = "black";
		}

		var snake = game.snake();
		for (var i=1; i< snake.length; i++) {
			drawLittlePoint(snake[i]);
		}

		if (colorState == "gray") {
			context.fillStyle = lightGray;
		}
		else {
			context.fillStyle = "red";
		}
		drawLittlePoint(snake[0]);
	}

	function drawFood() {
		if (colorState == "gray") {
			context.fillStyle = lightGray;
		}
		else {
			context.fillStyle = "green";
		}

		var food = game.food();
		for (var i=0; typeof(food) != "undefined" && i< food.length; i++) {
			drawLittlePoint(food[i]);
		}
	}

	function displayMenu() {
		if (actionState == "scores menu") {
			drawButtons([title, 0, 0, menu]);
			updateButtonPlacement = 1;
			drawButtons(medals, title.y2 + title.height/2, menu.y1 - title.y2 - title.height);
			context.fillStyle = "black";
			context.font = medals[0].height + font_suffix;
			for (var i=0; i<best_scores.length; i++) {
				context.fillText(best_scores[i] + " ", medals[i].x2 + diameter, medals[i].y2);
			}
		}
		else if (actionState == "language menu") {
			drawButtons([title, english, french]);
		}
		else {
			drawButtons([title, play, help, scores]);
		}
	}

	function displayCurrentScore() {

		var writer = new Writer(diameter, 2*diameter, 3*diameter);
		writer.font = 2*diameter + font_suffix;

		writer.add_O_in_red(language.get("score") + " " + game.snake().length);

		// caption
		writer.printNewLine();
		writer.add(caption, "black", 3*diameter + font_suffix);
	}

	function displayScores() {

		drawButtons([title,0,retry,menu]);

		var size = title.height / 2;
		var writer = new Writer(title.x1, title.y2 + title.height, 1.5 * size);
		writer.font = size + font_suffix;

		writer.add_O_in_red(language.get("your_score") + " " + final_score + ".");

		writer.printNewLine();
		writer.add_O_in_red(language.get("best_scores") + " ");

		var final_score_already_occured = 0;
		for (var i=0; i<best_scores.length; i++) {
			if (best_scores[i] == final_score && !final_score_already_occured) {
				writer.add(best_scores[i] + "", "red");
				final_score_already_occured = 1;
			}
			else {
				writer.add(best_scores[i] + "");
			}

			// punctuation
			if (i+1 < best_scores.length) {
				writer.add(", ");
			}
			else {
				writer.add(". ");
			}
		}
	}

	function displayPause() {
		drawButtons([title,0,0,menu],diameter,canvas.height - 50 - 2*diameter);
		pause.draw();
	}

	function drawLittlePoint(point) {
		var relative_x;

		if (positionState == "absolute") {
			relative_x = point.x;
			relative_y = point.y;
		}
		else {
			// the drawing will be relative to the head of the snake
			relative_x = point.x - game.snake()[0].x + center.x;
			relative_y = point.y - game.snake()[0].y + center.y;

			// the little point should still been drawn if it is visible modulo the grid size
			if (relative_x < 0) {
				relative_x += gameConst.gridWidth;
			}
			else if (relative_x*diameter > canvas.width) {
				relative_x -= gameConst.gridWidth;
			}
			if (relative_y < 0) {
				relative_y += gameConst.gridHeight;
			}
			else if (relative_y*diameter > canvas.height) {
				relative_y -= gameConst.gridHeight;
			}
		}

		// translate to pixels
		real_x = (2*relative_x+1)*diameter/2;
		real_y = (2*relative_y+1)*diameter/2;

		// test if display is necessary
		if (real_x >= 0 && real_x <= canvas.width + diameter
			&& real_y >= 0 && real_y <= canvas.height + diameter) {
			context.beginPath();
			context.arc(real_x,real_y,diameter/2,0,2*Math.PI);
			context.fill();
			context.closePath();
		}
	}

	function drawButtons(buttons, y, height) {
		// y and height are for the area that must contains the buttons
		if (typeof(y) == "undefined") {
			y = 2*diameter;
		}
		if (typeof(height) == "undefined") {
			height =(center.y - 2)*2*diameter;
		}

		var button_nb = buttons.length;

		if (updateButtonPlacement) {
			// update button positions

			// button y positions
			var button_margin = height / (3*button_nb - 1);

			for (var i=0; i<button_nb; i++) {
				if (buttons[i]) {
					buttons[i].setPlacement(y + i*(3*button_margin), 2*button_margin);
				}
			}

			updateButtonPlacement = 0;
		}

		for (i=0; i<button_nb; i++) {
			if (buttons[i]) {
				buttons[i].draw();
			}
		}
	}

	function Button(filename) {

		// PRIVATE ATTRIBUTES

		// for accessing this even inside private methods
		var that = this;

		var image = new Image();

		// this was not supported by Canvas+
		//image.addEventListener("load", load);

		image.src = "images/" + filename + ".png";

		var proportion;

		// PRIVATE METHODS

		function load() {
			proportion = image.width / image.height;
			if (typeof(that.y1) != "undefined") {
				update();
			}
		}

		function update() {
			that.width = proportion * that.height;
			if (that.width > canvas.width - 4*diameter) {
				that.width = canvas.width - 4*diameter;
				var initial_height = that.height;
				that.height = that.width / proportion;
				that.y1 += (initial_height - that.height) / 2;
			}
			that.x1 = (canvas.width - that.width) / 2;
			setSecondCorner();
			//console.log(filename + " x1: " + that.x1 + " ; y1: " + that.y1 + " ; x2: " + that.x2 + " ; y2: " + that.y2);
		}

		function setSecondCorner() {
			// by definition x2 = x1 + width and y2 = y1 + height
			that.x2 = that.x1 + that.width;
			that.y2 = that.y1 + that.height;
		}

		// PUBLIC SETTERS

		this.setPlacement = function(y1, height, x1, width) {
			// y1 and height are mandatory arguments and x1 and width are optional arguments but they must be defined together or not at all
			this.y1 = y1;
			this.height = height;
			if (typeof(x1) != "undefined" && typeof(width) != "undefined") {
				this.x1 = x1;
				this.width = width;
				setSecondCorner();
			}
			else if (typeof(proportion) != "undefined") {
				update();
			}
		};

		// PUBLIC METHODS

		// boolean function
		this.on = function(x, y) {
			if (typeof(this.x1) == "undefined" || typeof(this.y1) == "undefined" || typeof(this.x2) == "undefined" || typeof(this.y2) == "undefined") {
				return false;
			}
			else {
				return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
			}
		};

		this.draw = function() {
			if (typeof(proportion) == "undefined" && typeof(image.width) != "undefined") {
				load();
			}
			context.drawImage(image, this.x1, this.y1, this.width, this.height);
		};
	}

	function Writer(x, y, lineHeight, max_x) {

		// ATTRIBUTES

		this.initial_x = x;
		this.x = x;
		this.y = y;
		this.lineHeight = lineHeight;
		this.max_x = max_x ? max_x : canvas.width;
		// this.font is initially undefined
		this.color = "black"

		// METHODS

		this.printNewLine = function() {
			//console.log("new line");
			this.x = this.initial_x;
			this.y += this.lineHeight;
		};

		this.printNewSpace = function() {
			this.x += context.measureText(" ").width;
		};

		this.print = function(word) {
			var width = context.measureText(word).width;
			if (this.x + width > this.max_x) {
				this.printNewLine();
			}
			//console.log(word + " (" + this.x + ", " + this.y + ")");
			context.fillText(word + " ", this.x, this.y);
			this.x += width;
		};

		this.add = function(text, color, font) {
			if (typeof(font) == "undefined") {
				font = this.font;
			}
			if (typeof(font) != "undefined") {
				context.font = font;
			}
			context.fillStyle = color ? color : this.color;

			var lines = text.split("\n");
			for (var i=0; i<lines.length; i++) {
				if (i>0) { this.printNewLine(); }

				var words = lines[i].split(" ");
				for (var j=0; j<words.length; j++) {
					if (j>0) { this.printNewSpace(); }
					this.print(words[j]);
				}

			}
		};

		this.add_O_in_red = function(text) {
			// it won't work probably if the O is at the beginning or the end
			var parts = text.split("O");
			for (var i=0; i<parts.length; i++) {
				if (i>0) { this.add("O", "red"); }
				this.add(parts[i]);
			}
		};
	}

	// return the object containing the public functions
	return display;
})();
