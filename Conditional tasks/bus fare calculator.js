let age = 65;
let isStudent = false;
let regularFare = 800;
let ticketFare;

if (age < 10) {
  ticketFare = 0;
} else if (isStudent) {
  ticketFare = regularFare * 0.5;
} else if (age >= 60) {
  ticketFare = regularFare * 0.85;
} else {
  ticketFare = regularFare;
}

console.log("Ticket Fare:", ticketFare, "Taka");
