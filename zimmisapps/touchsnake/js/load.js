/* The functions avaiable through the load namespace are:
** load.menu()
** load.bestScores()
** load.game()
** load.scores()
** load.pause()
** load.unloadMenu()
** load.unloadBestScores()
** load.unloadGame()
** load.unloadScores()
** load.unloadPause()
** load.help()
*/

var load = (function() {

	// the load object will be used to provide public functions for this namespace
	var load = {};
	
	// PRIVATE VARIABLES
	
    var myInterval;
	var myFoodInterval;
	var helpStep = 0;
	
	// PUBLIC FUNCTIONS
	
	// loading functions
	load.menu = function() {
	
		game.initSnake(display.getCenter().x, 1, 1, 0);
		
		if (language.isSet()) {
			display.setState("start menu", "menu", "normal", "absolute");
		}
		else {
			display.setState("language menu", "menu", "normal", "absolute");
		}
		
		// animate
		myInterval = setInterval(animate.menu, gameConst.animationRate);
	};
	
	load.bestScores = function() {
	
		// retrieve scores
		var bestScores = [];
		for (var i=0; i<3; i++) {
			var best_score_i = window.localStorage["best_score_" + i];
			if (typeof(best_score_i) == "undefined") {
				break;
			}
			else {
				bestScores.push(best_score_i);
			}
		}
		
		display.setBestScores(bestScores);
		display.setState("scores menu", "menu", "normal", "absolute");
		// we are keeping the rest of the menu state (position of the snake, interval...)
	};

	load.game = function() {
		
		game.initSnake(0, 0, 0, 1);
		game.initFood();
	
		// animate
		loadGameMechanics();
	};
	
	load.scores = function() {
	
		// retrieve scores
		var final_score = game.snake().length;
		var best_scores = [];
		var has_final_score_been_written = 0;
		for (var i=0; i<3; i++) {
			var best_score_i = window.localStorage["best_score_" + i];
			if (typeof(best_score_i) == "undefined") {
				if (!has_final_score_been_written) {
					best_scores.push(final_score);
				}
				break;
			}
			else {
				if (!has_final_score_been_written && final_score >= best_score_i) {
					best_scores.push(final_score);
					has_final_score_been_written = 1;
				}
				if (best_scores.length < 3) {
					best_scores.push(best_score_i);
				}
			}
		}
		
		// save scores
		for (var i=0; i<best_scores.length; i++) {
			window.localStorage["best_score_" + i] = best_scores[i];
		}
		
		display.setState("game over", "scores", "gray");
		display.scores(final_score, best_scores);
	};
	
	load.pause = function() {
		unloadGameMechanics();
		display.setState("pause", "pause", "gray");
		display.pause();
	};
	
	// unloading functions
	load.unloadMenu = function() {
		clearInterval(myInterval);
	};
	
	load.returnToMainMenu = function() {
		display.setState("start menu", "menu", "normal", "absolute");
	};
	
	load.unloadGame = function() {
		unloadGameMechanics();
		display.setState("unactive", "game");
	};
	
	load.unloadPause = function() {
		// unloading pause means resuming the game
		loadGameMechanics();
	};
	
	load.help = function() {
		// the help function has X steps
		switch (helpStep) {
				
			// part 0 - initializaiton
			case 0:
				game.initFood();
				fst_food = game.food()[0];
				// we set the position of the snake to make sure food is visible from the beginning
				game.initSnake(fst_food.x + 20, fst_food.y, 0, -1);
				display.setState("unactive", "game", "normal", "relative", language.get("welcome"));
				myInterval = setInterval(function() { display.game(); game.moveSnake(); }, gameConst.animationRate);
				setTimeout(function() { load.help(); }, 4000);
				break;
			
			case 1:
				display.setState("unactive", "game", "normal", "relative", language.get("control"));
				setTimeout(function() { load.help(); }, 4000);
				break;
		
			// part 2 - user must turn right
			case 2:
				clearInterval(myInterval);
				display.setState("right only", "game", "normal", "relative", language.get("right"));
				myInterval = setInterval(function() { display.game(); }, gameConst.animationRate);
				break;
				
			// part 4 - user must turn left
			case 4:
				clearInterval(myInterval);
				display.setState("left only", "game", "normal", "relative", language.get("left"));
				myInterval = setInterval(function() { display.game(); }, gameConst.animationRate);
				break;
			
			// part 3 and 5 - almost normal game playing
			case 3:
			case 5:
				clearInterval(myInterval);
				display.setState("unactive", "game", "normal", "relative");
				myInterval = setInterval(function() { display.game(); game.moveSnake(); }, gameConst.animationRate);
				setTimeout(function() { load.help(); }, 2000);
				break;
			
			// part 6 - eat some food
			case 6:
				clearInterval(myInterval);
				game.addFoodOnTheRoad();
				display.setState("unactive", "game", "normal", "relative", language.get("food"));
				myInterval = setInterval(function() { display.game(); game.moveSnake(); }, gameConst.animationRate);
				setTimeout(function() { load.help(); }, 4000);
				break;
				
			// part 7 - user must switch to pause mode (currently playing)
			case 7:
				clearInterval(myInterval);
				display.setState("center only", "game", "normal", "relative", language.get("pause"));
				myInterval = setInterval(function() { display.game(); }, gameConst.animationRate);
				break;
			
			default:
				clearInterval(myInterval);
				load.pause();
				helpStep = 0;
				return; // quit to avoid increasing helpStep
		}
		helpStep ++;
	};
	
	// PRIVATE FUNCTIONS
	
	function loadGameMechanics() {
		display.setState("game playing", "game");
		myInterval = setInterval(animate.game, gameConst.animationRate);
		myFoodInterval = setInterval(game.addFood, 5000);
	}
	
	function unloadGameMechanics() {
		clearInterval(myInterval);
		clearInterval(myFoodInterval);
	}
	
	// return the object containing the public functions
	return load;
})();