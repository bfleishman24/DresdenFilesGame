// need variables for gghealth and badguy health
// need variable for turn coutner
var ggHealth = ``;
var bgHealth = ``;
var turnCounter = 0;
//There will be a an array of objects for both good guys and bad guys
//Each character will have different attacks and defenses and life points

var goodGuys = [
{
    name:"Harry Dresden",
    health: 150,
    attacks:[`Fuego`,`Forzare`,`Infriga`,],
    defenses:[`hexus`,`roll`],
    // picture: photos/Harry_Dresden.jpg,
},
{
    name:"Thomas Raith",
    health: 180,
    attacks:[`Slash`,`Haymaker`,`DoubleTap`],
    defenses:[`roll`,`Feed`],
    // picture: photos/Thomas_Raith.jpg,
},

];

var badGuys = [
    {
        name:"Nicodemus",
        health: 200,
        attacks:[`Stab`,`Knock Down`,`Coin Blast`],
        defenses:[`Deflect`,`Absorb`],
        // picture: photos/Nick.jpg
    }






];


$(document).ready(function(){
    for(i=0; i < goodGuys.length; i++){

        var ggbttn = $(`<button>`);
        ggbttn.addClass(`ggbutton`).attr(`indexnum`,i).text(goodGuys[i].name);
        $(`.chooseCharacter`).append(ggbttn);

        // $(`.chooseCharacter`).append(`<button>`+ goodGuys[i].name + `</button>`);
    }

    $(`.ggbutton`).on(`click`, function(){
        var ggChoice = $(this).attr(`indexnum`);
        ggChoice=parseInt(ggChoice);
        console.log(ggChoice);

        startGame(ggChoice);
    });
})


function startGame(gg){
    $(`.chooseCharacter`).empty();

    // //display the GoodGuy Attacjs
    for( t = 0 ; t < goodGuys[gg].attacks.length; t++){

            // $(`#ggAttacks`).append(`<div>`+ goodGuys[gg].attacks[t] + `</div>`);


        var ggattks = $(`<button>`);
        ggattks.addClass(`ggattksbttn`).text(goodGuys[gg].attacks[t]);
        console.log(goodGuys[gg].attacks[t]);
 

        $(`#ggAttacks`).append(ggattks);

    }
    //displaying the defensive moves for the GoodGuy
    for( u = 0 ; u < goodGuys[gg].defenses.length; u++){


    var ggdefense = $(`<button>`);
    ggdefense.addClass(`ggdfnsbttn`).text(goodGuys[gg].defenses[u]);


    $(`#ggDefense`).append(ggdefense);

}
//display the GoodGuy name and life
    $(`#champion`).append(`<div>`+ goodGuys[gg].name + `</div>`);
    $(`#ggLife`).append(`<div>`+ "Health: " + goodGuys[gg].health + `</div>`);



    // //display the Badguy
    for(b=0;b<badGuys.length;b++){
    // chosenbg = math.floor(math.random(b));
    $(`#heretic`).append(`<div>`+ badGuys[b].name + `</div>`);
    $(`#bgAttacks`).append(`<div>`+ badGuys[b].name + `</div>`);
    $(`#bgDefense`).append(`<div>`+ badGuys[b].name + `</div>`);
    $(`#bgLife`).append(`<div>`+ badGuys[b].name + `</div>`);

 }




}
//Each player will take a turn to either attack or plan for defense
//When a character is attacked you will subtrack the amount of attack damage from the opposing characters life
//If the character being attack played a defensive move, the current attack can only take away from the lifepoints
//what exceeded the defensive spell
//once you have the basics built think about having special attacks


