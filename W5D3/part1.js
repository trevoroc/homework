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

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(35));
console.log(isPrime(37));

function sumOfNPrimes(n) {
  let sum = 0;
  let count = 0;
  let i = 2;

  while (count < n) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }

    i++;
  }

  return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
