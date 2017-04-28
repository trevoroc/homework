const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function teaAndBiscuits(callback) {

  reader.question("Would you like some tea?", function (teaRes) {
    console.log(`You replied ${teaRes}.`);

    reader.question("Would you like some biscuits?", (biscuitRes) => {
      console.log(`You replied ${biscuitRes}.`);


      const firstRes = (teaRes === "yes") ? "do" : "don\'t";
      const secondRes = (biscuitRes === "yes") ? "do" : "don\'t";

      callback(firstRes, secondRes);
    });
  });


}

teaAndBiscuits(function (firstRes, secondRes) {
  console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
  reader.close();
});
