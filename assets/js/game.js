// Variables to fight
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50; 
var enemyAttack = 12;

//Variables log check pre fight.
console.log(playerName, playerHealth, playerAttack);
console.log(enemyName, enemyHealth, enemyAttack);

//Fight function 
var fight = function() {
  window.alert("welcome to Robot Gladiators!");
  enemyHealth = enemyHealth - playerAttack;
  playerHealth = playerHealth - enemyAttack;
};

fight();

//Post Fight enemyHealth variable log check
console.log (
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
)

//check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " had died!");
}
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

//Post fight playerHealth variable log check
console.log (
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
)

//check Players health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
}
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

