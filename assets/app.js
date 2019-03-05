$(document).ready(function () {

    //I feel like these could probably all have been combined
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
        $("#squirtle-figther").appendTo("..container-fluid")
    });

    let chosenEnemy;
    let chosenPokemon;

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


    //when a user clicks the attack button, userFigther damages opponent
    $("#battle-button").on("click", function () {
        battle(chosenPokemon, chosenEnemy);
        refresh();
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
        constructor(hp, ap) {
            this.hp = hp;
            this.ap = ap;
            this.baseap = ap;
        }
    }

    class Enemy extends Pokemon {
        constructor(hp, ap) {
            super(hp, ap);
        }
    }

    function addStats(pokemon, id) {
        $(`#${id}-figther > p > #hp`).text(pokemon.hp);
        $(`#${id}-figther > p > #ap`).text(pokemon.ap);
    }

    // Let's make some figthers with variables
    const meowth = new Enemy(12, 3);


    const wheezing = new Enemy(10, 4);


    const wobbuffet = new Enemy(14, 5);

    const pikachu = new Pokemon(10, 5);

    const charmander = new Pokemon(12, 6);

    const squirtle = new Pokemon(14, 7);

    function battle(pokemon, enemy) {
        enemy.hp -= pokemon.ap
        pokemon.ap += pokemon.baseap
        pokemon.hp -= enemy.ap


        //enemy's HP decreases by Pokemon's AP
        //Pokemon's AP increases by base AP
        //Pokemon's HP decreases by enemy's AP

    }

    refresh();






});

