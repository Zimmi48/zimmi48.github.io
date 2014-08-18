/* The functions available through the language namespace are:
** language.isSet()
** -- returns a boolean

** The getters available through the language namespace are:
** language.get(name)

** The setters available through the language namespace are:
** language.set(language)
*/

var language = (function() {

	var language = {};
	
	// PRIVATE VARIABLES
	
	var current = "unloaded";
	var content = {
		english: {
			welcome: "Welcome to Touch Snake",
			control: "Control the snake using the touch screen",
			right: "Touch the right part of the screen to turn right",
			left: "Touch the left part of the screen to turn left",
			food: "To grow up, your snake must eat green peas",
			pause: "Finally, put the game in pause mode by touching the head of the snake",
			score: "SCORE:",
			your_score: "YOUR SCORE:",
			best_scores: "BEST SCORES:"
		},
		french: {
			welcome: "Bienvenue dans Touch Snake",
			control: "Controlez le snake à l'aide du tactile",
			right: "Touchez la partie droite de l'écran pour tourner à droite",
			left: "Touchez la partie gauche de l'écran pour tourner à gauche",
			food: "Pour grandir, votre snake doit manger des pois verts",
			pause: "Pour finir, mettez le jeu en pause en touchant la tête du snake",
			score: "SCORE:",
			your_score: "VOTRE SCORE:",
			best_scores: "MEILLEURS SCORES:"
		}
	};
	
	// PUBLIC GETTERS
	
	language.get = function(name) {
		if (current == "unloaded") {
			loadLanguage();
		}
		else if (current == "unset") {
			return content["english"][name];
		}
		else {
			return content[current][name];
		}
	};
	
	// PUBLIC SETTERS
	
	language.set = function(lang) {
		current = lang;
		window.localStorage.language = lang;
	}		
	
	// PUBLIC FUNCTIONS	
	
	language.isSet = function() {
		if (current == "unloaded") {
			loadLanguage();
		}
		return current != "unset";
	};
	
	// PRIVATE FUNCTIONS
	
	function loadLanguage() {
		current = window.localStorage.language;
		if (typeof(current) == "undefined") {
			current = "unset";
		}
	}
	
	// return the object containing the public functions
	return language;
})();