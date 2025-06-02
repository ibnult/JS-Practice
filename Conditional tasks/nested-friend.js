let yourScore = 85;
let friendScore = 78;

if (yourScore > 80) {
  if (friendScore > 80) {
    console.log("Go for a lunch.");
  }
   else if (friendScore >= 60) {
    console.log("Good luck next time.");
  } 
  else if (friendScore >= 40) {
    console.log("Keep your friend's message unseen.");
  }
   else {
    console.log("Block your friend.");
  }
}
 else {
  console.log("Go home and sleep and act sad.");
}
