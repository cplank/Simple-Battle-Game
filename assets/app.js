$(document).ready(function () {

    $("#pikachu-button").on("click", function () {
        console.log("You got Pikachu")
        $("#pikachu-figther").appendTo(".arena-box")

        //$(".card").appendTo(".arena-box")
    });

    $("#charmander-button").on("click", function () {
        console.log("You got Charmander")
        $("#charmander-figther").appendTo(".arena-box")
    });

    $("#squirtle-button").on("click", function () {
        console.log("You got Squirtle")
        $("#squirtle-figther").appendTo(".arena-box")
    });

    $("#enemy-button").on("click", function () {
        console.log("You picked an enemy")
        $("#enemy-figther").appendTo(".arena-box")
    });









    // function attack() {
    //     //when a user clicks the attack button, userFigther damages opponent
    //     $(".btn").on("click", function () {
    //         console.log("Battle is happening");
    //     })
    // }

    // function enemyDefeated() {
    //     //when the enemy figther has health points 0 or below, they move to a different part of the board
    // }

    // function win() {

    // }

    // function userLose() {

    // }

    //class for Figther
    // class Fighter {
    //     constructor(hp, ap) {
    //         this.hp = hp;
    //         this.ap = ap;
    //     }
    // }

    // class Enemy extends Figther {
    //     constructor(hp, ap) {
    //         super(hp, ap);
    //     }
    // }

    //class for enemyFigther

    //Let's make some figthers with variables
    // const figther1 = new Enemy(12, 3);

    // const figther2 = new Enemy(10, 4);

    // const figther3 = new Enemy(14, 5);

    // const figther4 = new Figther(10, 5);

    // const figther5 = new Figther(12, 6);

    // const figther6 = new Figther(14, 7);

    //onclicks!! 

});

