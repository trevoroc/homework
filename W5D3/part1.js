function madLib(verb, adjective, noun) {
  return `We shall ${verb} the ${adjective} ${noun}.`;
}

console.log(madLib("manipulate", "loving", "necklace"));

function isSubstring(searchString, subString) {
  let searchLength = searchString.length;
  let subLength = subString.length;

  if (searchLength < subLength) {
    return false;
  }

  let substr;
  for (let i = 0; i < searchLength - subLength; i++) {
    substr = searchString.slice(i, i + subLength);

    if (substr === subString) {
      return true;
    }
  }

  return false;
}

console.log(isSubstring("time to program", "time"));
console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz(array) {
  let divByThreeAndFive = [];

  function divByThree(num) {
    return num % 3 === 0;
  }

  function divByFive(num) {
    return num % 5 === 0;
  }

  array.forEach(function (num) {
    if ((divByThree(num) || divByFive(num)) &&
       !(divByThree(num) && divByFive(num))) {
      divByThreeAndFive.push(num);
    }
  });

  return divByThreeAndFive;
}

console.log(fizzBuzz([1, 2, 3, 4, 5]));
