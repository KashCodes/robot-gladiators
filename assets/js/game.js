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
var fight = function() {
  //Repeat and execute as long as the enemy-robot is alive. 
  while(enemyHealth > 0) {
    // Prompt to fight your robot.
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player chooses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      
      //remove enemy's health
      enemyHealth = enemyHealth - playerAttack;
      console.log (
        playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining "
      );


      //check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " had died!");
      }
      else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
      }

      //remove players health
      playerHealth = playerHealth - enemyAttack;
      console.log (
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
      )

      //check players health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      }
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

    // if player chooses to skip 
    }else if (promptFight === "skip" || promptFight === "SKIP") {
      
      // confirm player wants to skip fight
      var confirmSkip = window.confirm("are you sure you'd like to quit?");
      
      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subract money for quiting
        playerMoney = playerMoney - 2;
      }

      //if no (false), ask a question again by running fight() again
      else {
        fight ();
      }

      // if player enter invalid option 
    } else {
      window.alert("you need to choose a valid option. Try again!")
      fight();
    }
    /*//Variables log check if skipped
    console.log(playerName, playerHealth, playerAttack, playerMoney);*/
  }
}
//for Loop fight function to fight multiple robots
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);

}