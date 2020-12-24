
// Variables to fight
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50; 
var enemyAttack = 12;

// Prompt to fight and name your robot.
var playerName = window.prompt("What is your robot's name?");
var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


//Variables log check pre fight.
console.log(playerName, playerHealth, playerAttack);
console.log(enemyName, enemyHealth, enemyAttack);

//Fight function 

//if player chooses to fight then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  //remove enemy's health
  enemyHealth = enemyHealth - playerAttack;
  console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
  );


  //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " had died!");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //remove players health
  playerHealth = playerHealth - enemyAttack;
  console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
  )

  //check players health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
//If player chooses to skip 
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
}

