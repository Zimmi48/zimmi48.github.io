/* The functions available through the game namespace are:
** game.initSnake(head_x, head_y, speed_x, speed_y)
** game.initFood()
** game.moveSnake()
** game.addFood()
** game.turnRight()
** game.turnLeft()
** game.addFoodOnTheRoad()
** -- for help mode

** The getters available through the game namespace are:
** game.dead()
** game.goingOut()
** -- return booleans
** game.snake()
** game.food()
** -- return arrays

** The constants available through the gameConst namespace are:
** gameConst.initLength
** gameConst.gridWidth
** gameConst.gridHeight
** gameConst.animationRate // this one is not used in this file
*/

const gameConst = {

	// PUBLIC CONSTANTS

	initLength : 8,
	gridWidth : 100,
	gridHeight : 100,
	animationRate : 70
};

var game = (function() {

	var game = {};

	// PRIVATE VARIABLES

	var snake_speed_x;
	var snake_speed_y;
	var snake;
	var food;
	var foodNb;

	// PUBLIC GETTERS

	game.snake = function() {
		return snake;
	}

	game.food = function() {
		return food;
	}

	game.dead = function() {
		for (var i=1; i<snake.length; i++) {
			if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
				return true;
			}
		}
		return false;
	}

	game.goingOut = function() {
		var center = display.getCenter();
		return (snake[0].x + snake_speed_x >= Math.max(2*center.x,snake[0].x)
			|| snake[0].x + snake_speed_x <= Math.min(0, snake[0].x)
			|| snake[0].y + snake_speed_y >= Math.max(2*center.y,snake[0].y)
			|| snake[0].y + snake_speed_y <= Math.min(0, snake[0].y))
	}

	// PUBLIC FUNCTIONS

	game.initSnake = function(head_x, head_y, speed_x, speed_y) {
		snake = [];
		snake_speed_x = speed_x;
		snake_speed_y = speed_y;
		for (var i=0; i<gameConst.initLength; i++) {
			snake.push({ x: head_x - snake_speed_x*i, y: head_y - snake_speed_y*i });
		}
	};

	game.initFood = function() {
		food = [];
		foodNb = 0;
		game.addFood();
	};

	game.moveSnake = function()  {

		// computes new position of snake's head
		new_x = (snake[0].x + snake_speed_x) % gameConst.gridWidth;
		new_y = (snake[0].y + snake_speed_y) % gameConst.gridHeight;

		if (new_x < 0) {
			new_x += gameConst.gridWidth;
		}
		if (new_y < 0) {
			new_y += gameConst.gridHeight;
		}

		for (var i=snake.length-1; i>0; i--) {
			snake[i] = snake[i-1];
		}
		snake[0] = { x: new_x, y : new_y };

		// test if food was eaten
		for (var i=0; typeof food != 'undefined' && i<food.length; i++) {
			if (new_x == food[i].x && new_y == food[i].y) {
				snake.push({ x: undefined, y: undefined });
				food[i] = { x: undefined, y: undefined };
				foodNb --;
			}
		}
	}

	game.addFood = function() {
		var step = Math.min(gameConst.gridHeight,gameConst.gridWidth,Math.max(30,Math.floor(50*Math.log(foodNb))));
		for (var x = 0; x < gameConst.gridWidth; x+= step) {
			for (var y = 0; y < gameConst.gridHeight; y += step) {
				addFoodXY(x,y,Math.min(step,gameConst.gridWidth-x),Math.min(step,gameConst.gridHeight-y));
			}
		}
	}

	game.turnRight = function() {
		tmp = snake_speed_y;
		snake_speed_y = snake_speed_x;
		snake_speed_x = -tmp;
	}

	game.turnLeft = function() {
		tmp = snake_speed_x;
		snake_speed_x = snake_speed_y;
		snake_speed_y = -tmp;
	}

	game.addFoodOnTheRoad = function() {
		food.push({ x: snake[0].x + 20*snake_speed_x, y: snake[0].y + 20*snake_speed_y });
		foodNb ++;
	}

	// PRIVATE FUNCTIONS

	function setFoodItem(i,x,y,width,height) {
		food[i] = { x: x + Math.floor(Math.random() * width), y: y + Math.floor(Math.random() * height) };
		foodNb ++;
	}

	function addFoodXY(x,y,width,height) {
		for (var i = 0; i < food.length; i++) {
			if (typeof(food[i].x) == "undefined") {
				setFoodItem(i,x,y,width,height);
				return;
			}
		}
		food.push({ x: undefined, y: undefined });
		setFoodItem(food.length-1,x,y,width,height);
	}

	return game;
})();
