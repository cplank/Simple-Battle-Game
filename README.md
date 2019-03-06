# Unit-4-Game
A short battle game between Pokemon 

## Description ##
This battle game was made using JavaScript and JQuery. Players choose a Pokemon to play as and a Pokemon
to battle. The Pokemon move into the arena and the player clicks the Battle Button to make the Pokemon attack.
When the player's Pokemon attacks, its attack increases by its base attack. When an enemy Pokemon is defeated,
it returns to the enemy part of the screen and returns to its ball. If the player is defeated, their Pokemon
goes on vacation and Misty appears to let the user know to refresh the page to play again. 

This game uses:

* jQuery 
* Bootstrap 4.3
* JavaScript
* Template Literals
* Classes

## Basics ##

This game uses the class Pokemon to categorize the user Pokemon and the enemy Pokemon. The Pokemon class
contains HP, AP, and baseAP. Enemy class extends Pokemon class and only contains HP and AP. 

The jQuery functions move each Pokemon to the arena area onclick and stores that selection in the variable chosenPokemon.The
same happens when the user selects an Enemy, and that is stored in chosenEnemy. 

In addition to those main jQuery functions, the game uses four functions to run the game:

* addStats - A function that updates all of the variables on the HTML side  
* refresh - Refresh calls addStats on all of our pokemonz. 
* battle - decreases enemy HP based on pokemon AP, increases pokemon AP by pokemon baseAP, and decreases pokemon HP based on enemy AP.
* isBattleOver - contains multiple if statements to determine if chosenPokemon or chosenEnemy HP is at or below 0 and triggers
several jQuery functions to change HTML element locations, images, and css colors. 

## Roadmap ##

Eventually, I'd like to add a little celebration if your Pokemon wins (right now nothing happens when you win), and make it so you can't have multiple chosenEnemy's in the arena. 
