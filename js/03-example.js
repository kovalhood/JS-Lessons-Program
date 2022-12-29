// Example 3 - Deep destructuring

// Rewrite the property so that it uses one object's parameter instead of a set of independent arguments.

// function getBotReport(companyName, repairBots, defenseBots) {
//   return `${companyName} has ${repairBots + defenseBots} bots in stock`;
// }

// // It was
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Is expected 
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defense: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"