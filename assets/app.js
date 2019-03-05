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
        $("pikachu-figther").css("float, left")
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
        $("meowth-figther").css("float, right")
    });

    $("#wheezing-button").on("click", function () {
        chosenEnemy = wheezing
        $("#wheezing-figther").appendTo(".container-fluid")
    });

    $("#wobbuffet-button").on("click", function () {
        chosenEnemy = wobbuffet
        $("#wobbuffet-figther").appendTo(".container-fluid")
    })


    //When battle button is pressed, the battle function is called
    //and takes the arguments of the variables chosenPokemon and chosenEnemy
    $("#battle-button").on("click", function () {
        battle(chosenPokemon, chosenEnemy);
        refresh();
        isBattleOver(chosenEnemy, chosenPokemon, name);
    });

    function refresh() {
        addStats(meowth, "meowth");
        addStats(wheezing, "wheezing");
        addStats(wobbuffet, "wobbuffet");
        addStats(pikachu, "pikachu");
        addStats(charmander, "charmander");
        addStats(squirtle, "squirtle");
    }

    // class for Pokemon
    class Pokemon {
        constructor(hp, ap, name) {
            this.hp = hp;
            this.ap = ap;
            this.name = name;
            this.baseap = ap;
        }
    }

    class Enemy extends Pokemon {
        constructor(hp, ap, name) {
            super(hp, ap, name);
        }
    }

    function addStats(pokemon, name) {
        $(`#${name}-boss > p > #hp`).text(pokemon.hp);
        $(`#${name}-boss > p > #ap`).text(pokemon.ap);
    }

    // Let's make some figthers with variables
    const meowth = new Enemy(12, 3, "meowth");

    const wheezing = new Enemy(10, 4, "wheezing");

    const wobbuffet = new Enemy(14, 5, "wobbuffet");

    const pikachu = new Pokemon(10, 5, "pikachu");

    const charmander = new Pokemon(12, 6, "charmander");

    const squirtle = new Pokemon(14, 7, "squirtle");

    function battle(pokemon, enemy) {
        enemy.hp -= pokemon.ap
        pokemon.ap += pokemon.baseap
        pokemon.hp -= enemy.ap

    }

    //If pokemon or enemy hp is at or below 0, initiate defeat
    function isBattleOver(chosenEnemy, chosenPokemon, name) {
        if (chosenEnemy.hp <= 0) {
            $(`#${name}-figther`).appendTo("#defeated")
            console.log("Enemy is defeated!")
        } else {
            if (chosenPokemon.hp <= 0) {
                console.log("you're dead")
                //$(".container-fluid").html("<h1>Game Over</h1>")
            } else {
                console.log("Keep going")
            }
        }
    }
    refresh();

    //Pick a new opponent. If 






});

