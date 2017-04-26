function titleize(array, callback) {
  let titleized = array.map((name) => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

function printEach(array) {
  array.forEach((title) => console.log(title));
}

titleize(["Mary", "Brian", "Leo"], printEach);
