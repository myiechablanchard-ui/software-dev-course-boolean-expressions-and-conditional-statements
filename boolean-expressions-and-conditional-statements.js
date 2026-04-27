/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");

  console.log("Along the rocky trail, you meet a friendly traveler who offers help.");
  const helpChoice = readline.question("Do you want 'directions' or for them to 'go with you'? ");

  if (helpChoice === "directions") {
    console.log("The traveler says, 'I'll trade you my compass for your map.'");
    hasMap = false;
    hasCompass = true;
    console.log("You trade your map for the compass.");
  } else if (helpChoice === "go with you") {
    console.log("The traveler nods and walks beside you.");
    const companionChoice = readline.question("They ask: 'Should we take the high trail or the low trail?' ").toLowerCase();

    if (companionChoice === "high") {
      console.log("You and the traveler climb the high trail and reach a beautiful overlook before continuing safely.");
    } else if (companionChoice === "low" && hasTorch) {
      console.log("You take the low trail together. The traveler spots loose rocks and saves you from slipping.");
    } else {
      console.log("Unsure of what you meant, the traveler chooses the safer route and guides you forward.");
    }

    const betrayalChance = readline.question("The traveler pauses. Do you 'trust' them or stay 'alert'? ").toLowerCase();
    if (betrayalChance === "trust") {
      console.log("As you relax, the traveler suddenly pushes you toward a cliff. You fall. Game over.");
      process.exit();
    } else {
      console.log("You stay alert. When the traveler tries to shove you, you dodge and escape. You survive and continue alone.");
    }
  }

  const direction = readline.question("You reach a fork in the path. Left, right, or forward? ").toLowerCase();

  if (direction === "forward") {
    console.log("You push through thick brush and discover a hidden cave filled with ancient carvings.");
    console.log("Behind a stone slab, you find a chest of gold. Secret ending: The Lost Treasure of the Mountains.");
    process.exit();
  }

  if (hasCompass) {
    console.log("The compass needle steadies, pointing you toward the safe route. You follow it and reach the mountain pass.");
  } else if (!hasCompass && direction === "left") {
    console.log("You choose the left path, avoiding danger. In a small hollow between the rocks, you discover a firestarter.");
  } else if (!hasCompass && direction === "right") {
    console.log("The path narrows until it becomes a cave entrance...");
    const survive = readline.question("Do you 'run' or 'hide'? ").toLowerCase();

    if (survive === "run") {
      console.log("You sprint out of the cave just as a massive shadow lunges behind you. You barely escape. Secret survival ending.");
    } else {
      console.log("You hear a roar... then darkness. Game over.");
    }
  } else {
    console.log("Unable to decide, you wander in confusion until night falls. Game over.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");

} else if (choice === "village" || hasMap) {
  console.log("You head toward the village.");

  const villageChoice = readline.question("Do you want to visit the 'market', the 'inn', or explore the 'alley'? ").toLowerCase();

  if (villageChoice === "market" || villageChoice === "bazaar") {
    console.log("The market is lively. A merchant offers you a small charm for good luck.");
  } else if (villageChoice === "inn") {
    console.log("You rest at the inn and regain your strength for the journey ahead.");
  } else if (villageChoice === "alley") {
    console.log("You slip into a narrow alley. A hooded figure whispers, 'Follow me if you seek truth.'");
    const follow = readline.question("Do you 'follow' or 'refuse'? ").toLowerCase();

    if (follow === "follow") {
      console.log("The figure leads you to a hidden shrine beneath the village.");
      console.log("You touch an ancient stone and feel power surge through you. Secret ending: The Chosen of the Shrine.");
    } else {
      console.log("You refuse and the figure vanishes. You return to the village square, uneasy but unharmed.");
    }
  } else {
    console.log("You wander the village streets, taking in the quiet atmosphere.");
  }

} else {
  console.log("You get lost and wander aimlessly.");
}
//