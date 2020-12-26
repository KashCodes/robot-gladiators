// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



// (Variable Robot Stats) Game States
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; 
var enemyAttack = 12;

/*//Variables log check pre fight.
console.log(playerName, playerHealth, playerAttack, playerMoney);
console.log(enemyNames, enemyHealth, enemyAttack);*/


//Fight function 
var fight = function(enemyName) {
  //Repeat and execute as long as the enemy-robot is alive. 
  while(enemyHealth > 0 && playerHealth > 0) {
    // Prompt to fight your robot.
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    //if player chooses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      
      //remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log (
        playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining "
      );

      //check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " had died!");

        //award player money for winning
        playerMoney = playerMoney +20;

        //leave while () loop since enemy is dead
        break;
      }
      else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }

      /*//Break if statement to stop robots from fighting after it is dead. 
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
        break;
      }*/
    }
      /*//if no (false), ask a question again by running fight() again
      else {
        fight ();
      }

        // if player enter invalid option 
      else {
        window.alert("you need to choose a valid option. Try again!")
        fight();
      }*/
  }
}
//for Loop fight function to fight multiple robots
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);

}