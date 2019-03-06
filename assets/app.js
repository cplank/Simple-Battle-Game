$(document).ready(function () {

    //Let's make some variables: 

    let chosenEnemy;
    let chosenPokemon;

    //I feel like these could probably all have been combined, but I didn't do that. 
    //These are the JQuery onclicks that move the pokemon to the arena once it's been
    //selected.

    $("#pikachu-button").on("click", function () {
        chosenPokemon = pikachu
        $("#pikachu-figther").appendTo(".container-fluid")
    });

    $("#charmander-button").on("click", function () {
        chosenPokemon = charmander
        $("#charmander-figther").appendTo(".container-fluid")
    });

    $("#squirtle-button").on("click", function () {
        chosenPokemon = squirtle
        $("#squirtle-figther").appendTo(".container-fluid")
    });

    $("#meowth-button").on("click", function () {
        chosenEnemy = meowth
        $("#meowth-figther").appendTo(".container-fluid")
    });

    $("#wheezing-button").on("click", function () {
        chosenEnemy = wheezing
        $("#wheezing-figther").appendTo(".container-fluid")
    });

    $("#wobbuffet-button").on("click", function () {
        chosenEnemy = wobbuffet
        $("#wobbuffet-figther").appendTo(".container-fluid")
    })

    //I decided to use classes because I'd learned about them but never used them,
    //and it seemed like an easy way to update the AP and HP as I figured out the right
    //balance between each of the pokemonz. It ended up also being useful later when I needed
    //to be able to talk to specific HTML elements that I had named after the names of the pokemonz
    //in play. I had gotten most of the way making the game before I realized I needed a way to 
    //reference the many different HTML elements I was planning on moving around and changing as the game
    //got more complicated. Because I used classes, I was easily able to add the name variable and not have
    //to change much of the work I'd already done. 
    class Pokemon {
        constructor(hp, ap, name) {
            this.hp = hp;
            this.ap = ap;
            this.name = name;
            this.baseap = ap;
        }
    }

    //I'm not sure I needed to do this, but because the enemies didn't have their ap increase
    //with each attack, I made them their own class that extends the Pokemon class.
    class Enemy extends Pokemon {
        constructor(hp, ap, name) {
            super(hp, ap, name);
        }
    }

    // Let's make some figthers with variables. These variables are either Pokemon or Enemy, and 
    //their parameters are stored in the variables of their class. 
    const meowth = new Enemy(20, 2, "meowth");

    const wheezing = new Enemy(18, 4, "wheezing");

    const wobbuffet = new Enemy(17, 5, "wobbuffet");

    const pikachu = new Pokemon(27, 2, "pikachu");

    const charmander = new Pokemon(22, 3, "charmander");

    const squirtle = new Pokemon(24, 4, "squirtle");

    //A single function that updates all of the variables on the HTML side (in this case, only
    //HP and AP). This function takes the parameters pokemon and name, which are declared in the class
    //in the Pokemon class. 

    function addStats(pokemon, name) {
        $(`#${name}-boss > p > #hp`).text(pokemon.hp);
        $(`#${name}-boss > p > #ap`).text(pokemon.ap);
    }

    //Refresh calls addStats on all of our pokemonz. I probably didn't end up needing to do it this way, but I 
    //had made most of the program without adding the name variable to the Pokemon class, so this was
    //the work around at the time. Once I created name and added it to the class, I updated the 
    //addStats function to reflect. But this worked, so I kept it.

    function refresh() {
        addStats(meowth, "meowth");
        addStats(wheezing, "wheezing");
        addStats(wobbuffet, "wobbuffet");
        addStats(pikachu, "pikachu");
        addStats(charmander, "charmander");
        addStats(squirtle, "squirtle");
    }

    //battle function takes the parameters of pokemon and enemy (global variables declared above)
    //and decreases enemy HP based on the number in pokemon AP, increases pokemon AP by the number stored in
    //pokemon baseAP (which is always the first AP number because it never changes), and decreases
    //pokemon HP based on enemy AP.

    function battle(pokemon, enemy) {
        enemy.hp -= pokemon.ap
        pokemon.ap += pokemon.baseap
        pokemon.hp -= enemy.ap

    }
    //When battle button is clicked, the battle function is called and takes the arguments of 
    //the variables chosenPokemon and chosenEnemy. All variables in the page are refreshed, so 
    //when battle happens both chosenPokemon and chosenEnemy HP and AP changes based on attack.
    //isBattleOver is called to determine if one of the pokemonz has fainted.

    $("#battle-button").on("click", function () {
        battle(chosenPokemon, chosenEnemy);
        refresh();
        isBattleOver(chosenEnemy, chosenPokemon);
    });

    //This function is A LOT, but it takes the parameters of chosenEnemy and chosenPokemon. If chosenEnemy
    //HP is at or below 0, then chosenEnemy's HMTL card goes back to the column it came from, the background
    //of the card changes, the button is hidden, and the image changes.    

    function isBattleOver(chosenEnemy, chosenPokemon) {
        if (chosenEnemy.hp <= 0) {
            $(`#${chosenEnemy.name}-figther`).appendTo($(`#${chosenEnemy.name}-holding`))
            $(`#${chosenEnemy.name}-figther`).css("background-color", "#666699");
            $(`#${chosenEnemy.name}-button`).hide()
            $(`#${chosenEnemy.name}-image`).attr("src", "assets/images/pokeball.png");
        }

        //if chosenPokemon HP is at or below 0, the background of the HTML card changes, the button
        //hides, the battle button is also hidden, the card image changes, and the image of Misty is added
        //to the column the Pokemon came from.
        if
            (chosenPokemon.hp <= 0) {
            $(`#${chosenPokemon.name}-figther`).css("background-color", "#ffff1a");
            $(`#${chosenPokemon.name}-button`).hide()
            $("#battle-button").hide()
            $(`#${chosenPokemon.name}-image`).attr("src", "assets/images/vacaypokeball.png");
            $(`#${chosenPokemon.name}-holding`).html("<img src='assets/images/misty.png' style='width: 667px; height: 500px;'>")
            console.log("you're dead")

            //This if statement hides the remaining two Pokemon once chosenPokemon has gone on vacation.
            if (chosenPokemon === charmander) {
                $("#pikachu-holding").hide();
                $("#squirtle-holding").hide();
            }
            if (chosenPokemon === squirtle) {
                $("#pikachu-holding").hide();
                $("#charmander-holding").hide();
            }
            if (chosenPokemon === pikachu) {
                $("#squirtle-holding").hide();
                $("#charmander-holding").hide();
            }
        }
    }
    refresh();

});

